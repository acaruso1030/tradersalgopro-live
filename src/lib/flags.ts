import { prisma } from "./db";

export async function isEnabled(key: string) {
  const flag = await prisma.featureFlag.findUnique({ where: { key } });
  return !!flag?.enabled;
}

export async function setFlag(key: string, enabled: boolean) {
  await prisma.featureFlag.upsert({
    where: { key },
    update: { enabled },
    create: { key, enabled },
  });
}
