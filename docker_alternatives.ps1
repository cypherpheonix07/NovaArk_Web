# PowerShell alternatives for Docker commands (Windows-compatible)

# 1. Alternative for: docker ps -q --filter network=my-network
# Lists container IDs connected to "my-network"
Write-Host "1. Containers in network 'my-network':"
docker ps --filter network=my-network -q

# Alternative using network inspect (PowerShell equivalent of xargs)
Write-Host "`nAlternative using network inspect:"
$containerNames = docker network inspect my-network --format '{{range .Containers}}{{.Name}} {{end}}' | ForEach-Object { $_.Trim() }
if ($containerNames) {
    $containerNames -split ' ' | Where-Object { $_ } | ForEach-Object {
        docker ps -q --filter name=$_
    }
}

# 2. Alternative for: docker ps -q --filter label=environment=production
# Lists container IDs with label "environment=production"
Write-Host "`n2. Containers with label 'environment=production':"
docker ps --filter label=environment=production -q

# Alternative including stopped containers
Write-Host "`nAlternative including stopped containers:"
docker ps -a --filter label=environment=production -q

# 3. Alternative for: docker ps -q --filter since=24h
# Note: Docker's --filter since expects a container ID/name, not a time duration.
# For containers created in the last 24 hours, we need to filter the output.
Write-Host "`n3. Containers created in the last 24 hours:"
$twentyFourHoursAgo = (Get-Date).AddHours(-24).ToString("yyyy-MM-ddTHH:mm:ss")
docker ps --format "table {{.ID}}\t{{.CreatedAt}}" | Select-Object -Skip 1 | Where-Object {
    $createdAt = $_.Split("`t")[1]
    [DateTime]::Parse($createdAt) -gt [DateTime]::Parse($twentyFourHoursAgo)
} | ForEach-Object { $_.Split("`t")[0] }

# 4. Alternative for: docker ps -q | xargs -I {} docker logs {}
# Shows logs for all running containers
Write-Host "`n4. Logs for all running containers:"
docker ps -q | ForEach-Object { docker logs $_ }

# Alternative showing container names with logs
Write-Host "`nAlternative with container names:"
docker ps --format "table {{.Names}}\t{{.ID}}" | Select-Object -Skip 1 | ForEach-Object {
    $parts = $_.Split("`t")
    $name = $parts[0]
    $id = $parts[1]
    Write-Host "`n--- Logs for $name ($id) ---"
    docker logs $id
}