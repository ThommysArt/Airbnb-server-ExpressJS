/*
  Warnings:

  - Added the required column `userId` to the `ListingReview` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ListingReview" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "listingId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT,
    CONSTRAINT "ListingReview_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "Listing" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ListingReview_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ListingReview" ("comment", "id", "listingId", "rating") SELECT "comment", "id", "listingId", "rating" FROM "ListingReview";
DROP TABLE "ListingReview";
ALTER TABLE "new_ListingReview" RENAME TO "ListingReview";
PRAGMA foreign_key_check("ListingReview");
PRAGMA foreign_keys=ON;
