-- CreateEnum
CREATE TYPE "userRole" AS ENUM ('TEAM', 'ADMIN');

-- CreateEnum
CREATE TYPE "eventType" AS ENUM ('TWITTER_SPACE', 'DISCORD_SESSION', 'LIVE_SESSION', 'HACKATHON', 'MINI_EVENT');

-- CreateTable
CREATE TABLE "users" (
    "email" TEXT NOT NULL,
    "phone" BIGINT,
    "name" TEXT NOT NULL,
    "twitterProfile" TEXT,
    "linkedinProfile" TEXT,
    "githubprofile" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "events" (
    "id" TEXT NOT NULL,
    "eventType" "eventType" NOT NULL,
    "speakerEmail" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sponsors" (
    "email" TEXT NOT NULL,
    "pocEmail" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sponsors_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "sponsorsinevents" (
    "sponsorEmail" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sponsorsinevents_pkey" PRIMARY KEY ("eventId","sponsorEmail")
);

-- CreateTable
CREATE TABLE "speakers" (
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "speakers_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "spekersinevents" (
    "speakerEmail" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "spekersinevents_pkey" PRIMARY KEY ("eventId","speakerEmail")
);

-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL,
    "githubRepo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "sponsorsinevents" ADD CONSTRAINT "sponsorsinevents_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sponsorsinevents" ADD CONSTRAINT "sponsorsinevents_sponsorEmail_fkey" FOREIGN KEY ("sponsorEmail") REFERENCES "sponsors"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "speakers" ADD CONSTRAINT "speakers_email_fkey" FOREIGN KEY ("email") REFERENCES "users"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "spekersinevents" ADD CONSTRAINT "spekersinevents_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "spekersinevents" ADD CONSTRAINT "spekersinevents_speakerEmail_fkey" FOREIGN KEY ("speakerEmail") REFERENCES "speakers"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
