import PageWrapper from "@/components/PageWrapper/PageWrapper";
import Home from "@/features/Home/Home";

export default function Index() {
  return (
    <PageWrapper isNavbar seo={{
      metaTitle: "AIXGrow: Elevating Brands for the Future Elite",
      metaDescription: "Explore AIXGrow's visionary strategies tailored for elite clientele. Revolutionize your brand's presence with advanced, personalized solutions.",
    }}
    >
      <Home />
    </PageWrapper>
  );
}
