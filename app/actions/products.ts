"use server";
import { products } from "@/data/products";
export async function getProducts(){return products.filter(Boolean)}
export async function getProductBySlug(slug:string){return products.find(p=>p.slug===slug) ?? null}
