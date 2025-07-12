import { useEffect, useRef } from 'react';
import romableLogo from '@/assets/romable_icon_transparent.png';

const BrandIdentity = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-bottom');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const colorPalette = [
    { name: 'Primary Gradient', value: 'linear-gradient(135deg, #6B46C1, #F59E0B)', isGradient: true },
    { name: 'Background Dark', value: '#1a1a2e', isGradient: false },
    { name: 'Background Light', value: '#f8f9fa', isGradient: false },
    { name: 'Text Primary', value: '#ffffff', isGradient: false },
    { name: 'Accent Gold', value: '#F59E0B', isGradient: false },
    { name: 'Accent Purple', value: '#6B46C1', isGradient: false },
  ];

  const typographyElements = [
    { label: 'H1 Display', text: 'Build Like the Romans', className: 'text-4xl md:text-6xl font-extrabold brand-gradient-text leading-tight' },
    { label: 'H2 Heading', text: 'Ship Like the Future', className: 'text-3xl md:text-5xl font-bold text-foreground' },
    { label: 'H3 Subheading', text: 'AI-Native Development', className: 'text-2xl md:text-4xl font-semibold text-foreground' },
    { label: 'Body Text', text: 'Transform your ideas into production-ready applications', className: 'text-lg text-muted-foreground' },
    { label: 'Small Text', text: 'Powered by AI', className: 'text-sm font-medium text-accent' },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-overlay pointer-events-none" />
      
      {/* Hero/Logo Section */}
      <section className="py-20 px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-on-scroll">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <img 
              src={romableLogo} 
              alt="Romable Logo" 
              className="h-32 w-32 object-contain shadow-glow"
            />
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-extrabold text-foreground mb-4">
                Romable
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                Rome wasn't built in a day, but your app can be
              </p>
            </div>
          </div>
          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold brand-gradient-text mb-4">
              Build Like the Romans, Ship Like the Future
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              AI-native product development platform that transforms your ideas into production-ready applications
            </p>
          </div>
        </div>
      </section>

      {/* Color Palette Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Color Palette
            </h2>
            <p className="text-lg text-muted-foreground">
              Premium colors inspired by Roman luxury and modern innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll">
            {colorPalette.map((color, index) => (
              <div key={index} className="group">
                <div 
                  className="w-full h-32 rounded-lg shadow-elegant hover-scale transition-all duration-300 group-hover:shadow-glow"
                  style={{ 
                    background: color.isGradient ? color.value : color.value,
                  }}
                />
                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-foreground">{color.name}</h3>
                  <p className="text-sm text-muted-foreground font-mono">
                    {color.isGradient ? 'Gradient' : color.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Typography
            </h2>
            <p className="text-lg text-muted-foreground">
              Inter font family with carefully crafted hierarchy
            </p>
          </div>
          
          <div className="space-y-12 animate-on-scroll">
            {typographyElements.map((element, index) => (
              <div key={index} className="group">
                <div className="mb-3">
                  <span className="text-sm font-medium text-accent uppercase tracking-wider">
                    {element.label}
                  </span>
                </div>
                <p className={element.className}>
                  {element.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Elements Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Visual Elements
            </h2>
            <p className="text-lg text-muted-foreground">
              Brand components that blend Roman heritage with AI innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-on-scroll">
            {/* Roman Arch Card */}
            <div className="glass-card roman-arch p-8 text-center hover-scale">
              <h3 className="text-2xl font-bold text-foreground mb-4">Roman Architecture</h3>
              <p className="text-muted-foreground mb-6">
                Inspired by the enduring strength and beauty of Roman engineering
              </p>
              <div className="w-24 h-24 mx-auto bg-gradient-primary rounded-full opacity-20" />
            </div>

            {/* Gradient Button Card */}
            <div className="glass-card p-8 text-center hover-scale">
              <h3 className="text-2xl font-bold text-foreground mb-4">Action Elements</h3>
              <p className="text-muted-foreground mb-6">
                Premium gradient buttons that command attention
              </p>
              <button className="px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-lg shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105">
                Start Building Free
              </button>
            </div>

            {/* Glassmorphism Card */}
            <div className="glass-card p-8 text-center hover-scale">
              <h3 className="text-2xl font-bold text-foreground mb-4">Glassmorphism</h3>
              <p className="text-muted-foreground mb-6">
                Modern glass effects for premium user interfaces
              </p>
              <div className="w-full h-16 glass-card rounded-lg flex items-center justify-center">
                <span className="text-accent font-medium">Glass Effect</span>
              </div>
            </div>

            {/* Pattern Preview */}
            <div className="glass-card p-8 text-center hover-scale relative overflow-hidden">
              <h3 className="text-2xl font-bold text-foreground mb-4">Brand Patterns</h3>
              <p className="text-muted-foreground mb-6">
                Subtle geometric patterns inspired by Roman tessellations
              </p>
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full" style={{
                  backgroundImage: `
                    linear-gradient(45deg, transparent 49%, hsl(var(--accent)) 49%, hsl(var(--accent)) 51%, transparent 51%),
                    linear-gradient(-45deg, transparent 49%, hsl(var(--primary)) 49%, hsl(var(--primary)) 51%, transparent 51%)
                  `,
                  backgroundSize: '20px 20px'
                }} />
              </div>
              <div className="relative z-10">
                <span className="text-accent font-medium">Geometric Pattern</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold brand-gradient-text mb-6">
            Ready to Build Your Empire?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are building the future with Romable's AI-native platform
          </p>
          <button className="px-12 py-6 bg-gradient-primary text-primary-foreground font-bold text-lg rounded-lg shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105">
            Start Building Free
          </button>
        </div>
      </section>
    </div>
  );
};

export default BrandIdentity;