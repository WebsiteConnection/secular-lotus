const ResourcesSection = () => {
  return (
    <section className="py-20 px-6 bg-background/50"> {/* Added subtle background tint */}
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-light text-center mb-4">
          Explore the Teachings
        </h2>
        <br></br>   
        
        <div className="grid gap-6 md:grid-cols-2"> {/* Increased gap for better readability */}
          {resources.map((resource, index) => {
            // Check if this is the last item in an odd-numbered list (index 6 is the 7th item)
            const isLastOdd = index === resources.length - 1 && resources.length % 2 !== 0;

            return (
              <a
                key={resource.title}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                /* Dynamically span and center the card if it's the lone 7th item */
                className={`group flex items-start gap-4 p-6 rounded-lg bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 ${
                  isLastOdd ? "md:col-span-2 md:max-w-md md:mx-auto w-full" : ""
                }`}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <resource.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-medium mb-1 group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {resource.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
