-- CreateTable
CREATE TABLE "Code" (
    "id" TEXT NOT NULL,
    "controller" TEXT,
    "code" TEXT NOT NULL,
    "inform" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Code.code_unique" ON "Code"("code");
