import Navigation from "@/components/Navigation";

const Examples = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <div className="mx-auto max-w-7xl px-6 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-foreground mb-4">
                        Examples
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Explore our collection of examples and templates
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Example Card 1 */}
                    <div className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                            Example 1
                        </h3>
                        <p className="text-muted-foreground">
                            Description of your first example goes here.
                        </p>
                    </div>

                    {/* Example Card 2 */}
                    <div className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                            Example 2
                        </h3>
                        <p className="text-muted-foreground">
                            Description of your second example goes here.
                        </p>
                    </div>

                    {/* Example Card 3 */}
                    <div className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                            Example 3
                        </h3>
                        <p className="text-muted-foreground">
                            Description of your third example goes here.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Examples;
