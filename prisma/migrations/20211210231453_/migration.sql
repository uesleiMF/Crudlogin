-- CreateTable
CREATE TABLE "_FilmeToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_FilmeToUser_AB_unique" ON "_FilmeToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_FilmeToUser_B_index" ON "_FilmeToUser"("B");

-- AddForeignKey
ALTER TABLE "_FilmeToUser" ADD FOREIGN KEY ("A") REFERENCES "Filme"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FilmeToUser" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
