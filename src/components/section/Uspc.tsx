import { Container } from "../Container";
import FadeIn from "../FadeIn";

function Uspc() {
  return (
    <Container className="relative z-10 text-white text-4xl font-bold py-6 pb-36 space-y-12 max-w-[720px]">
      <FadeIn>
        <p>New Apple Originals every month — always ad‑free.</p>
      </FadeIn>

      <FadeIn>
        <p>
          Stream on the Apple TV app on Apple devices, smart TVs, consoles, or
          sticks.
        </p>
      </FadeIn>

      <FadeIn>
        <p>Watch in 4K HDR video with immersive Spatial Audio.</p>
      </FadeIn>

      <FadeIn>
        <p>Share a single subscription with up to five people.</p>
      </FadeIn>

    </Container>
  );
}

export default Uspc;
