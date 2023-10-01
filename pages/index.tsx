import Link from "next/link";
import Layout from "../components/Layout";
import "tailwindcss/tailwind.css";

import { AvailabilityProvider } from "../contexts/AvailabilityContext";

const IndexPage = () => (
  <AvailabilityProvider>
    <Layout title="Home | Next.js + TypeScript Example">
      <h1 className="text-3xl font-bold ">Hello Next.js 👋</h1>
      <p>
        <Link href="/about">About</Link>
      </p>
    </Layout>
  </AvailabilityProvider>
);

export default IndexPage;
