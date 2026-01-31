import { ReactNode } from "react";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  content: ReactNode | null;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-modern-web-experiences",
    title: "🧱 Building Modern Web Experiences",
    excerpt:
      "Exploring the latest trends in frontend development and how to create exceptional user experiences.",
    date: "January 15, 2026",
    category: "Development",
    content: (
      <>
        <p className="text-lg leading-relaxed mb-8 theme-text-secondary">
          <strong className="theme-text-primary">
            Exploring the latest trends in frontend development and how to
            create exceptional user experiences
          </strong>
        </p>

        <p className="mb-6 theme-text-primary">
          Frontend development has quietly shifted.
        </p>

        <p className="mb-6 theme-text-primary">
          Not in a flashy &quot;everything is different now&quot; way, but in a more
          meaningful one. The centre of gravity has moved away from frameworks
          and toward <strong>experience</strong>.
        </p>

        <p className="mb-6 theme-text-primary">
          Not just user experience either. Developer experience, team
          experience, and long-term maintainability now matter just as much.
        </p>

        <p className="mb-6 theme-text-primary">
          After years working across design systems, large-scale React
          applications, and modern Next.js stacks, a few clear patterns keep
          emerging. These are not hype-driven trends. They are practical shifts
          that make teams faster, products calmer, and codebases easier to live
          with.
        </p>

        <p className="mb-8 theme-text-primary">
          This article explores what &quot;modern&quot; really means today, and how to
          apply it in ways that actually improve outcomes.
        </p>

        <hr className="border-t my-12 theme-border" />

        {/* Section 1 */}
        <h2 className="text-2xl font-inter mb-6 theme-text-primary">
          🧭 1. Modern frontend is experience-first, not framework-first
        </h2>

        <p className="mb-6 theme-text-primary">
          Choosing a stack used to feel like the most important decision.
        </p>

        <p className="mb-6 theme-text-primary">Today, it rarely is.</p>

        <p className="mb-4 theme-text-primary">
          Most mainstream tools are good enough. The differentiator is how well
          your system:
        </p>

        <ul className="list-disc list-inside mb-6 space-y-2 theme-text-primary">
          <li>Scales with team size</li>
          <li>Encourages good architecture</li>
          <li>Makes change cheap</li>
          <li>Keeps complexity visible</li>
        </ul>

        <p className="mb-4 theme-text-primary">
          Modern frontend thinking starts with questions like:
        </p>

        <ul className="list-disc list-inside mb-6 space-y-2 theme-text-primary">
          <li>How do we avoid tight coupling?</li>
          <li>How do we prevent accidental complexity?</li>
          <li>How do we make the happy path obvious?</li>
        </ul>

        <p className="mb-6 theme-text-primary">
          Framework choice is an implementation detail. Architecture is the
          product.
        </p>

        <div className="p-6 rounded-2xl mb-8 theme-glass">
          <h3 className="font-inter mb-3 theme-text-primary">
            ✨ Practical takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 theme-text-primary">
            <li>Prefer patterns over libraries</li>
            <li>Document architectural decisions</li>
            <li>Optimise for replacement, not permanence</li>
          </ul>
        </div>

        <p className="mb-8 italic theme-text-secondary">
          If something is painful to remove, it is probably too important.
        </p>

        <hr className="border-t my-12 theme-border" />

        {/* Section 2 */}
        <h2 className="text-2xl font-inter mb-6 theme-text-primary">
          🖥️ 2. Server-first rendering is becoming the default
        </h2>

        <p className="mb-6 theme-text-primary">
          The shift toward server components, streaming, and partial hydration
          is not about chasing benchmarks. It is about restoring balance.
        </p>

        <p className="mb-6 theme-text-primary">
          For years we pushed everything into the browser. Now we selectively
          pull logic back to the server where it belongs.
        </p>

        <p className="mb-4 theme-text-primary">Benefits:</p>

        <ul className="list-disc list-inside mb-6 space-y-2 theme-text-primary">
          <li>Less JavaScript shipped</li>
          <li>Faster initial paint</li>
          <li>Simpler data access</li>
          <li>Better security boundaries</li>
        </ul>

        <p className="mb-6 theme-text-primary">
          This does not mean &quot;no client components&quot;. It means:
        </p>

        <blockquote className="border-l-4 pl-6 my-8 italic theme-border theme-text-secondary">
          Default to server. Escalate to client only when necessary.
        </blockquote>

        <p className="mb-6 theme-text-primary">
          Think of interactivity as a scarce resource.
        </p>

        <div className="p-6 rounded-2xl mb-8 theme-glass">
          <h3 className="font-inter mb-3 theme-text-primary">
            ✨ Practical takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 theme-text-primary">
            <li>Separate data-fetching from interactivity</li>
            <li>Keep client components small and focused</li>
            <li>Treat browser JS as a performance budget</li>
          </ul>
        </div>

        <hr className="border-t my-12 theme-border" />

        {/* Section 3 */}
        <h2 className="text-2xl font-inter mb-6 theme-text-primary">
          🧩 3. Component libraries are moving toward headless by default
        </h2>

        <p className="mb-6 theme-text-primary">
          The most resilient component systems today share a trait:
        </p>

        <p className="mb-6 theme-text-primary">
          They separate behaviour from appearance.
        </p>

        <p className="mb-4 theme-text-primary">Instead of:</p>

        <pre className="p-4 rounded-xl mb-6 overflow-x-auto text-sm theme-glass">
          <code className="theme-text-primary">{`<Button variant="primary" />`}</code>
        </pre>

        <p className="mb-4 theme-text-primary">We increasingly see:</p>

        <ul className="list-disc list-inside mb-6 space-y-2 theme-text-primary">
          <li>Headless behaviour layer</li>
          <li>Styling layer chosen by the consumer</li>
          <li>Tokens as the shared contract</li>
        </ul>

        <p className="mb-4 theme-text-primary">This unlocks:</p>

        <ul className="list-disc list-inside mb-6 space-y-2 theme-text-primary">
          <li>Multiple styling strategies</li>
          <li>Easier rebrands</li>
          <li>Product-level theming</li>
          <li>Better accessibility consistency</li>
        </ul>

        <p className="mb-4 theme-text-primary">Responsibilities become clearer:</p>

        <ul className="list-disc list-inside mb-6 space-y-2 theme-text-primary">
          <li>Design owns tokens</li>
          <li>Engineering owns behaviour</li>
          <li>Product chooses composition</li>
        </ul>

        <div className="p-6 rounded-2xl mb-8 theme-glass">
          <h3 className="font-inter mb-3 theme-text-primary">
            ✨ Practical takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 theme-text-primary">
            <li>Build logic-first components</li>
            <li>Expose primitives instead of &quot;finished&quot; UI</li>
            <li>Treat styling as a plug-in</li>
          </ul>
        </div>

        <p className="mb-8 italic theme-text-secondary">
          If your component library dictates aesthetics, it is already limiting
          future change.
        </p>

        <hr className="border-t my-12 theme-border" />

        {/* Section 4 */}
        <h2 className="text-2xl font-inter mb-6 theme-text-primary">
          🎨 4. Tokens are replacing CSS frameworks as the real foundation
        </h2>

        <p className="mb-6 theme-text-primary">
          Utility CSS frameworks became popular because they solved consistency.
        </p>

        <p className="mb-6 theme-text-primary">
          Design tokens solve consistency at a deeper level.
        </p>

        <p className="mb-4 theme-text-primary">
          Instead of encoding meaning in class names:
        </p>

        <pre className="p-4 rounded-xl mb-6 overflow-x-auto text-sm theme-glass">
          <code className="theme-text-primary">bg-blue-500</code>
        </pre>

        <p className="mb-4 theme-text-primary">We encode meaning in values:</p>

        <pre className="p-4 rounded-xl mb-6 overflow-x-auto text-sm theme-glass">
          <code className="theme-text-primary">--color-brand-primary</code>
        </pre>

        <p className="mb-6 theme-text-primary">
          This shifts thinking from &quot;what shade&quot; to &quot;what role&quot;.
        </p>

        <p className="mb-4 theme-text-primary">Tokens scale across:</p>

        <ul className="list-disc list-inside mb-6 space-y-2 theme-text-primary">
          <li>Web</li>
          <li>Mobile</li>
          <li>Email</li>
          <li>Design tools</li>
        </ul>

        <p className="mb-4 theme-text-primary">They also enable:</p>

        <ul className="list-disc list-inside mb-6 space-y-2 theme-text-primary">
          <li>Runtime theming</li>
          <li>White-labelling</li>
          <li>Dark mode</li>
          <li>Brand switching</li>
        </ul>

        <div className="p-6 rounded-2xl mb-8 theme-glass">
          <h3 className="font-inter mb-3 theme-text-primary">
            ✨ Practical takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 theme-text-primary">
            <li>Create semantic token layers</li>
            <li>Avoid component-specific tokens</li>
            <li>Keep scale systems boring and predictable</li>
          </ul>
        </div>

        <p className="mb-8 italic theme-text-secondary">
          Tokens should feel boring. Boring means stable.
        </p>

        <hr className="border-t my-12 theme-border" />

        {/* Section 5 */}
        <h2 className="text-2xl font-inter mb-6 theme-text-primary">
          🧠 5. Declarative UI beats clever abstractions
        </h2>

        <p className="mb-6 theme-text-primary">
          Modern frontend increasingly rewards code that reads like
          configuration.
        </p>

        <p className="mb-4 theme-text-primary">Prefer:</p>

        <ul className="list-disc list-inside mb-6 space-y-2 theme-text-primary">
          <li>Small pure functions</li>
          <li>Explicit data flow</li>
          <li>Shallow composition</li>
        </ul>

        <p className="mb-4 theme-text-primary">Over:</p>

        <ul className="list-disc list-inside mb-6 space-y-2 theme-text-primary">
          <li>Complex imperative logic</li>
          <li>Hidden side effects</li>
          <li>Deep inheritance</li>
        </ul>

        <p className="mb-4 theme-text-primary">Declarative code:</p>

        <ul className="list-disc list-inside mb-6 space-y-2 theme-text-primary">
          <li>Is easier to review</li>
          <li>Is easier to test</li>
          <li>Breaks in obvious ways</li>
        </ul>

        <p className="mb-6 theme-text-primary">
          The goal is not fewer lines. The goal is fewer surprises.
        </p>

        <div className="p-6 rounded-2xl mb-8 theme-glass">
          <h3 className="font-inter mb-3 theme-text-primary">
            ✨ Practical takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 theme-text-primary">
            <li>Prefer composition over inheritance</li>
            <li>Avoid &quot;smart&quot; base components</li>
            <li>Make state transitions explicit</li>
          </ul>
        </div>

        <p className="mb-8 italic theme-text-secondary">
          If something feels magical, it will eventually feel fragile.
        </p>

        <hr className="border-t my-12 theme-border" />

        {/* Section 6 */}
        <h2 className="text-2xl font-inter mb-6 theme-text-primary">
          ⚡ 6. Performance is now about perception, not just metrics
        </h2>

        <p className="mb-6 theme-text-primary">Lighthouse scores matter.</p>

        <p className="mb-4 theme-text-primary">
          But users perceive speed through:
        </p>

        <ul className="list-disc list-inside mb-6 space-y-2 theme-text-primary">
          <li>Time to first meaningful content</li>
          <li>Visual stability</li>
          <li>Input responsiveness</li>
          <li>Predictable loading states</li>
        </ul>

        <p className="mb-4 theme-text-primary">
          Modern performance work focuses on:
        </p>

        <ul className="list-disc list-inside mb-6 space-y-2 theme-text-primary">
          <li>Streaming</li>
          <li>Skeletons</li>
          <li>Progressive rendering</li>
          <li>Selective hydration</li>
        </ul>

        <p className="mb-6 theme-text-primary">
          A fast blank page feels slower than a progressively loading one.
        </p>

        <div className="p-6 rounded-2xl mb-8 theme-glass">
          <h3 className="font-inter mb-3 theme-text-primary">
            ✨ Practical takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 theme-text-primary">
            <li>Load content in layers</li>
            <li>Always show something quickly</li>
            <li>Defer non-essential interactivity</li>
          </ul>
        </div>

        <p className="mb-8 italic theme-text-secondary">Perceived speed is UX.</p>

        <hr className="border-t my-12 theme-border" />

        {/* Section 7 */}
        <h2 className="text-2xl font-inter mb-6 theme-text-primary">
          ♿ 7. Accessibility is shifting from checklist to culture
        </h2>

        <p className="mb-4 theme-text-primary">Most teams know about:</p>

        <ul className="list-disc list-inside mb-6 space-y-2 theme-text-primary">
          <li>ARIA labels</li>
          <li>Colour contrast</li>
          <li>Keyboard navigation</li>
        </ul>

        <p className="mb-6 theme-text-primary">
          Fewer teams treat accessibility as a design constraint from day one.
        </p>

        <p className="mb-4 theme-text-primary">Modern accessibility:</p>

        <ul className="list-disc list-inside mb-6 space-y-2 theme-text-primary">
          <li>Lives inside components</li>
          <li>Is enforced by primitives</li>
          <li>Is hard to opt out of</li>
        </ul>

        <p className="mb-6 theme-text-primary">
          The best systems make accessible usage the easiest usage.
        </p>

        <div className="p-6 rounded-2xl mb-8 theme-glass">
          <h3 className="font-inter mb-3 theme-text-primary">
            ✨ Practical takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 theme-text-primary">
            <li>Bake a11y into primitives</li>
            <li>Test with keyboard regularly</li>
            <li>Avoid &quot;accessibility passes&quot; at the end</li>
          </ul>
        </div>

        <p className="mb-8 italic theme-text-secondary">
          Accessibility is architecture, not polish.
        </p>

        <hr className="border-t my-12 theme-border" />

        {/* Section 8 */}
        <h2 className="text-2xl font-inter mb-6 theme-text-primary">
          🛠️ 8. Tooling should reduce thinking, not increase it
        </h2>

        <p className="mb-6 theme-text-primary">Great tooling removes decisions.</p>

        <p className="mb-6 theme-text-primary">Bad tooling adds them.</p>

        <p className="mb-4 theme-text-primary">Signs of healthy tooling:</p>

        <ul className="list-disc list-inside mb-6 space-y-2 theme-text-primary">
          <li>Few required conventions</li>
          <li>Fast feedback</li>
          <li>Predictable outputs</li>
          <li>Easy debugging</li>
        </ul>

        <p className="mb-4 theme-text-primary">
          Modern stacks increasingly converge on:
        </p>

        <ul className="list-disc list-inside mb-6 space-y-2 theme-text-primary">
          <li>Monorepos</li>
          <li>Strong typing</li>
          <li>Automated releases</li>
          <li>Linting + formatting gates</li>
        </ul>

        <div className="p-6 rounded-2xl mb-8 theme-glass">
          <h3 className="font-inter mb-3 theme-text-primary">
            ✨ Practical takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 theme-text-primary">
            <li>Automate the boring stuff</li>
            <li>Standardise aggressively</li>
            <li>Document only what cannot be inferred</li>
          </ul>
        </div>

        <p className="mb-8 italic theme-text-secondary">
          Every manual step will eventually fail.
        </p>

        <hr className="border-t my-12 theme-border" />

        {/* Section 9 */}
        <h2 className="text-2xl font-inter mb-6 theme-text-primary">
          🔁 9. The real trend: designing for change
        </h2>

        <p className="mb-6 theme-text-primary">
          Most frontend projects fail slowly.
        </p>

        <p className="mb-6 theme-text-primary">
          Not because of bad engineers.
          <br />
          Not because of bad frameworks.
        </p>

        <p className="mb-6 theme-text-primary">
          They fail because change becomes expensive.
        </p>

        <p className="mb-4 theme-text-primary">
          Modern frontend architecture optimises for:
        </p>

        <ul className="list-disc list-inside mb-6 space-y-2 theme-text-primary">
          <li>Replaceable parts</li>
          <li>Shallow dependency graphs</li>
          <li>Clear boundaries</li>
          <li>Cheap experimentation</li>
        </ul>

        <p className="mb-6 theme-text-primary">
          If you can swap your styling system without rewriting your components,
          you are probably doing something right.
        </p>

        <div className="p-6 rounded-2xl mb-8 theme-glass">
          <h3 className="font-inter mb-3 theme-text-primary">
            ✨ Practical takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 theme-text-primary">
            <li>Design seams into the system</li>
            <li>Avoid global singletons</li>
            <li>Isolate volatile concepts</li>
          </ul>
        </div>

        <p className="mb-8 italic theme-text-secondary">
          Change is the only constant. Architect accordingly.
        </p>

        <hr className="border-t my-12 theme-border" />

        {/* Section 10 */}
        <h2 className="text-2xl font-inter mb-6 theme-text-primary">
          🌟 10. What exceptional user experience actually looks like
        </h2>

        <p className="mb-6 theme-text-primary">
          Exceptional UX is rarely flashy.
        </p>

        <p className="mb-4 theme-text-primary">It feels:</p>

        <ul className="list-disc list-inside mb-6 space-y-2 theme-text-primary">
          <li>Calm</li>
          <li>Predictable</li>
          <li>Forgiving</li>
          <li>Fast enough</li>
          <li>Understandable</li>
        </ul>

        <p className="mb-6 theme-text-primary">It is the absence of friction.</p>

        <p className="mb-4 theme-text-primary">
          From a frontend perspective, this usually comes from:
        </p>

        <ul className="list-disc list-inside mb-6 space-y-2 theme-text-primary">
          <li>Clear information hierarchy</li>
          <li>Consistent patterns</li>
          <li>Responsive feedback</li>
          <li>Thoughtful defaults</li>
        </ul>

        <p className="mb-8 italic theme-text-secondary">
          Great UX is mostly invisible.
        </p>

        <hr className="border-t my-12 theme-border" />

        {/* Closing */}
        <h2 className="text-2xl font-inter mb-6 theme-text-primary">
          🧘 Closing thoughts
        </h2>

        <p className="mb-6 theme-text-primary">
          Modern frontend development is maturing.
        </p>

        <p className="mb-6 theme-text-primary">
          Less obsession with novelty. More focus on foundations.
        </p>

        <p className="mb-4 theme-text-primary">
          The teams building the best experiences today are not chasing trends.
          They are investing in:
        </p>

        <ul className="list-disc list-inside mb-6 space-y-2 theme-text-primary">
          <li>Architecture over aesthetics</li>
          <li>Simplicity over cleverness</li>
          <li>Systems over components</li>
          <li>Long-term clarity over short-term speed</li>
        </ul>

        <p className="mb-6 theme-text-primary">
          If your codebase feels calm, your product will usually feel calm too.
        </p>

        <p className="theme-text-primary">
          That, more than anything, is what modern web development is about.
        </p>
      </>
    ),
  },
  {
    slug: "the-art-of-component-design",
    title: "The Art of Component Design",
    excerpt:
      "A deep dive into creating reusable, composable React components that scale with your application.",
    date: "January 10, 2026",
    category: "Design",
    content: null,
  },
  {
    slug: "performance-optimization-strategies",
    title: "Performance Optimization Strategies",
    excerpt:
      "Practical techniques for improving web application performance and user experience.",
    date: "January 5, 2026",
    category: "Performance",
    content: null,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return blogPosts.filter((post) => post.content !== null).map((post) => post.slug);
}
