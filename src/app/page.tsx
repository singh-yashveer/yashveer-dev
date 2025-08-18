import withAnimatedGridBackground from "@/shared/UI/GridPattern/withAnimatedGridBackground";

// Example component that will be wrapped with grid background
const HeroSection = () => (
  <section className="py-20 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Welcome to My Portfolio
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
        Experience the beautiful animated grid background that appears as you scroll
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">Get Started</button>
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
    <div className="font-sans bg-white dark:bg-gray-900 min-h-screen">
      <GridWrappedHero />
    </div>
  );
}
