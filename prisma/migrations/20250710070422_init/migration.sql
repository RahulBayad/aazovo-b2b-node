-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "company_code" TEXT,
    "company_name" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "owner_name" TEXT,
    "ownership_type" TEXT,
    "establishment_year" INTEGER,
    "industry" TEXT NOT NULL,
    "business_category" TEXT[],
    "company_type" TEXT,
    "company_website" TEXT,
    "company_logo_brochure" TEXT,
    "primary_contact_no" TEXT,
    "alternate_contact_no" TEXT,
    "primary_email" TEXT NOT NULL,
    "alternate_email" TEXT,
    "gst_no" TEXT,
    "pan_no" TEXT,
    "trn_no" TEXT,
    "tan_no" TEXT,
    "enableBilling" TEXT DEFAULT 'No',
    "userAccess" TEXT DEFAULT 'No',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KYCVerification" (
    "id" SERIAL NOT NULL,
    "gst_certificate_file" TEXT,
    "gst_remark" TEXT,
    "gst_verified" TEXT DEFAULT 'No',
    "pan_card_file" TEXT,
    "pan_card_remark" TEXT,
    "pan_card_verified" TEXT DEFAULT 'No',
    "declaration_194q_file" TEXT,
    "declaration_194q_remark" TEXT,
    "declaration_194q_verified" TEXT DEFAULT 'No',
    "authority_letter_file" TEXT,
    "authority_letter_remark" TEXT,
    "authority_letter_verified" TEXT DEFAULT 'No',
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "KYCVerification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HeadOffice" (
    "id" SERIAL NOT NULL,
    "officeName" TEXT,
    "office_gst" TEXT,
    "contact_person" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "country" TEXT,
    "state" TEXT,
    "city" TEXT,
    "pincode" INTEGER,
    "location" TEXT,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "HeadOffice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Office" (
    "id" SERIAL NOT NULL,
    "officeType" TEXT,
    "officeName" TEXT,
    "office_gst" TEXT,
    "contact_person" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "country" TEXT,
    "state" TEXT,
    "city" TEXT,
    "pincode" INTEGER,
    "location" TEXT,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "Office_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BankDetail" (
    "id" SERIAL NOT NULL,
    "account_number" BIGINT,
    "accunt_type" TEXT,
    "account_holder_name" TEXT,
    "bank_name" TEXT,
    "ifsc_code" TEXT,
    "primary" BOOLEAN,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "BankDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reference" (
    "id" SERIAL NOT NULL,
    "person_name" TEXT,
    "designation" TEXT,
    "company_name" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "Reference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BillingDocument" (
    "id" SERIAL NOT NULL,
    "doc_name" TEXT,
    "doc_file" TEXT NOT NULL,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "BillingDocument_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Company_company_code_key" ON "Company"("company_code");

-- CreateIndex
CREATE INDEX "Company_company_code_idx" ON "Company"("company_code");

-- CreateIndex
CREATE UNIQUE INDEX "KYCVerification_companyId_key" ON "KYCVerification"("companyId");

-- CreateIndex
CREATE UNIQUE INDEX "HeadOffice_companyId_key" ON "HeadOffice"("companyId");

-- AddForeignKey
ALTER TABLE "KYCVerification" ADD CONSTRAINT "KYCVerification_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HeadOffice" ADD CONSTRAINT "HeadOffice_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Office" ADD CONSTRAINT "Office_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BankDetail" ADD CONSTRAINT "BankDetail_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reference" ADD CONSTRAINT "Reference_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BillingDocument" ADD CONSTRAINT "BillingDocument_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
