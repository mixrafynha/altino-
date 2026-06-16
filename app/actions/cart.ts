"use server";
export async function addToCart(input:unknown){const data=(input&&typeof input==='object'?input:{}) as Record<string,unknown>;return {ok:true,item:{productId:String(data.productId||''),quantity:Number(data.quantity||1),customization:data.customization||{}}};}
export async function createProductionPayload(orderId:string, customization:Record<string,unknown>){return {orderId,station:"chantier",checklist:{messageChecked:Boolean(customization.message),addressChecked:Boolean(customization.address),devisApproved:Boolean(customization.previewUrl)}}}
