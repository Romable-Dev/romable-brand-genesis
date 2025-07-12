import { motion } from 'framer-motion';
import { Play, ArrowRight, Mouse } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const codeLines = [
    'const app = createRomableApp({',
    '  theme: "roman-architecture",',
    '  ai: { enabled: true },',
    '  deployment: "instant"',
    '});',
    '',
    'app.build().deploy();',
    '// ✨ Your app is live in minutes'
  ];

  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      
      {/* Roman Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M30 30l15-15v30l-15-15zm-15 0L0 15v30l15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }} />
      </div>

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, hsl(var(--secondary)) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Primary Headline */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="brand-gradient-text">
                Build Like the Romans,
              </span>
              <br />
              <span className="brand-gradient-text">
                Ship Like the Future
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              className="text-xl md:text-2xl text-foreground/90 font-normal"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Rome wasn't built in a day, but your app can be
            </motion.p>

            {/* Value Proposition */}
            <motion.p
              className="text-lg text-foreground/70 leading-relaxed max-w-[600px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Transform your ideas into production-ready applications using AI-native development. 
              From concept to deployment in hours, not months.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button
                size="lg"
                className="bg-gradient-primary text-primary-foreground hover:brightness-110 hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold shadow-elegant"
              >
                Start Building Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-secondary/50 bg-transparent hover:bg-secondary/10 px-8 py-4 text-lg font-semibold"
              >
                <Play className="mr-2 h-5 w-5" />
                See How It Works
              </Button>
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {[
                "🚀 Deploy in Minutes",
                "🏛️ Enterprise Architecture", 
                "✨ AI-Powered Development"
              ].map((feature, index) => (
                <div
                  key={index}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-card/10 border border-secondary/30 text-sm font-medium text-foreground/90 backdrop-blur-sm"
                >
                  {feature}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Code Animation */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="glass-card p-6 rounded-xl relative overflow-hidden">
              {/* Code Editor Header */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/20">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-sm text-foreground/60 ml-4 font-mono">romable-app.js</span>
              </div>

              {/* Animated Code */}
              <div className="font-mono text-sm space-y-1">
                {codeLines.map((line, index) => (
                  <motion.div
                    key={index}
                    className="text-foreground/80"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: 1 + (index * 0.2),
                      duration: 0.5 
                    }}
                  >
                    {line.includes('const') && (
                      <span>
                        <span className="text-purple-400">const</span>{' '}
                        <span className="text-blue-400">app</span>{' '}
                        <span className="text-foreground/60">=</span>{' '}
                        <span className="text-yellow-400">createRomableApp</span>
                        <span className="text-foreground/60">(&#123;</span>
                      </span>
                    )}
                    {line.includes('theme:') && (
                      <span className="ml-4">
                        <span className="text-green-400">theme</span>
                        <span className="text-foreground/60">: </span>
                        <span className="text-orange-400">"roman-architecture"</span>
                        <span className="text-foreground/60">,</span>
                      </span>
                    )}
                    {line.includes('ai:') && (
                      <span className="ml-4">
                        <span className="text-green-400">ai</span>
                        <span className="text-foreground/60">: &#123; enabled: </span>
                        <span className="text-orange-400">true</span>
                        <span className="text-foreground/60"> &#125;,</span>
                      </span>
                    )}
                    {line.includes('deployment:') && (
                      <span className="ml-4">
                        <span className="text-green-400">deployment</span>
                        <span className="text-foreground/60">: </span>
                        <span className="text-orange-400">"instant"</span>
                      </span>
                    )}
                    {line === '});' && (
                      <span className="text-foreground/60">&#125;&#41;;</span>
                    )}
                    {line.includes('app.build()') && (
                      <span>
                        <span className="text-blue-400">app</span>
                        <span className="text-foreground/60">.</span>
                        <span className="text-yellow-400">build</span>
                        <span className="text-foreground/60">().</span>
                        <span className="text-yellow-400">deploy</span>
                        <span className="text-foreground/60">&#40;&#41;;</span>
                      </span>
                    )}
                    {line.includes('//') && (
                      <span className="text-green-500/80">{line}</span>
                    )}
                    {line === '' && <span>&nbsp;</span>}
                  </motion.div>
                ))}
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-5 blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2"
        >
          <Mouse className="h-6 w-6 text-foreground/50" />
          <span className="text-sm text-foreground/50 font-medium">Scroll to explore</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;