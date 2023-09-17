import Accordion from "@/components/Accordion";
import PageHeader from "@/components/header";

import faqData from "../mockData";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <PageHeader>
        <PageHeader.Title> Header</PageHeader.Title>
        <PageHeader.Navbar>
          {faqData.map((item) => (
            <PageHeader.Item key={item.id}>{item.header}</PageHeader.Item>
          ))}
        </PageHeader.Navbar>
      </PageHeader>

      <Accordion>
        <Accordion.Title>LogRocket FAQ</Accordion.Title>
        <Accordion.Wrapper>
          {faqData.map((item) => (
            <Accordion.Item key={item.id}>
              <Accordion.ItemHeader>{item.header}</Accordion.ItemHeader>
              <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion.Wrapper>
      </Accordion>
    </main>
  );
}
