-- CreateTable
CREATE TABLE "warnings" (
    "id" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "warnings_pkey" PRIMARY KEY ("id")
);
