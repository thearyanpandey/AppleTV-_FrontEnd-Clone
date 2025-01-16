import Button from "../Button";
import { Container } from "../Container";
import FadeIn from "../FadeIn";

function Trail() {
  return (
    <FadeIn className="pb-40">
      <Container className="text-white sm:flex items-center justify-between p-8 max-w-[720px]">
        <FadeIn className="pb-10">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Buy an Apple device</h2>
            <h1 className="text-2xl font-bold">3 months free.</h1>
            <p className="text-sm text-[#7D7D81]">
              Apple TV+ is included for 3 months when you purchase an Apple
              device and redeem the offer within 90 days.
            </p>
            <Button size="medium">Check eligibility </Button>
          </div>
        </FadeIn>
        <FadeIn className="pb-10">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Buy an Apple device</h2>
            <h1 className="text-2xl font-bold">3 months free.</h1>
            <p className="text-sm text-[#7D7D81]">
              Apple TV+ is included for 3 months when you purchase an Apple
              device and redeem the offer within 90 days.
            </p>
            <Button size="medium">Check eligibility </Button>
          </div>
        </FadeIn>
        <FadeIn className="pb-10 gap-2">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Buy an Apple device</h2>
            <h1 className="text-2xl font-bold">3 months free.</h1>
            <p className="text-sm text-[#7D7D81] mb-8">
              Apple TV+ is included for 3 months when you purchase an Apple
              device and redeem the offer within 90 days.
            </p>
            <Button size="medium">Check eligibility </Button>
          </div>
        </FadeIn>
      </Container>
    </FadeIn>
  );
}

export default Trail;
