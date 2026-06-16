import { DesignerClient } from "@/components/designer/designer-client";
export default async function Designer({searchParams}:{searchParams:Promise<{product?:string}>}){const sp=await searchParams;return <main className="safe-bottom mx-auto max-w-7xl px-4 py-10 md:px-8"><DesignerClient initialProduct={sp.product}/></main>}
