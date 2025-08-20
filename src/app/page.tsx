import { Button } from "@/shared/components/ui/button";
import withAnimatedGridBackground from "@/shared/UI/GridPattern/withAnimatedGridBackground";

// Example component that will be wrapped with grid background
const HeroSection = () => (
  <section className="py-20 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Welcome to My Portfolio
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
        Experience the beautiful animated grid background and try the theme toggle in the header!
      </p>
      <div className="flex gap-4 justify-center">
        <Button>Get Started</Button>
        <Button variant="outline">Learn More</Button>
      </div>
    </div>
  </section>
);

// Content sections to test header behavior
const ContentSection = ({ id, title, content }: { id: string; title: string; content: string }) => (
  <section id={id} className="py-16 px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-foreground">{title}</h2>
      <p className="text-lg text-muted-foreground leading-relaxed">{content}</p>
    </div>
  </section>
);

export const GridWrappedHero = withAnimatedGridBackground(HeroSection, {
  gridSize: 90,
  animationDelay: 20,
  lineOpacity: 1,
  className: "h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950",
});

export default function Home() {
  return (
    <div className="font-sans bg-background text-foreground min-h-screen">
      <GridWrappedHero />

      <ContentSection
        id="about"
        title="About Me"
        content="I'm a passionate developer who loves creating beautiful and functional web experiences. The header above features a smooth SVG morphing animation that transitions between sun and moon icons when you toggle between light and dark themes."
      />

      <ContentSection
        id="projects"
        title="Projects"
        content="Here you'll find a showcase of my latest work, featuring modern web technologies, beautiful animations, and thoughtful user experiences. Notice how the header stays fixed at the top with a subtle backdrop blur effect."
      />

      <ContentSection
        id="contact"
        title="Contact"
        content="Get in touch with me to discuss potential collaborations, projects, or just to say hello! The theme toggle in the header remembers your preference and respects your system theme settings."
      />

      {/* Extra content to test scrolling */}
      <div className="py-32 px-6 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Scroll Test</h3>
          <p className="text-muted-foreground">Scroll up and down to see how the header behaves with the backdrop blur and sticky positioning.</p>
        </div>
      </div>
    </div>
  );
}
