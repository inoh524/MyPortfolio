-- CreateTable
CREATE TABLE "WebsiteEvent" (
    "id" SERIAL NOT NULL,
    "eventType" TEXT NOT NULL,
    "page" TEXT,
    "element" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WebsiteEvent_pkey" PRIMARY KEY ("id")
);
