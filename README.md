**English:**
Mina Consol is a learning and product management platform. Admins can add courses with multimedia content (images, videos, PDFs) and products with import/export categorization. Users can view courses by section and products by import/export type and sub-section.

**Bangla:**
Mina Consol একটি লার্নিং এবং প্রোডাক্ট ম্যানেজমেন্ট প্ল্যাটফর্ম। অ্যাডমিনরা বিভিন্ন মিডিয়া (ইমেজ, ভিডিও, পিডিএফ) সহ কোর্স এবং Import/Export ধরণের প্রোডাক্ট যুক্ত করতে পারেন। ব্যবহারকারীরা বিভাগভিত্তিক কোর্স এবং Import/Export ধরন ও সাব-সেকশন অনুযায়ী প্রোডাক্ট দেখতে পারবেন।

---

## **2. Features / ফিচারসমূহ**

**English:**

* Admin Panel:

  * Add, edit, delete courses with sections.
  * Add, edit, delete products with Import/Export and sub-sections.
  * Upload multiple media types (png, jpg, mp4, pdf).
* Public Pages:

  * View courses by section.
  * View products by type (Import/Export) and sub-section.
* Responsive layout.

**Bangla:**

* অ্যাডমিন প্যানেল:

  * কোর্স যুক্ত, সম্পাদনা এবং মুছুন, সেকশন সহ।
  * প্রোডাক্ট যুক্ত, সম্পাদনা এবং মুছুন, Import/Export এবং সাব-সেকশন সহ।
  * একাধিক মিডিয়া ফাইল আপলোড (png, jpg, mp4, pdf)।
* পাবলিক পেজ:

  * সেকশন অনুযায়ী কোর্স দেখুন।
  * ধরন (Import/Export) এবং সাব-সেকশন অনুযায়ী প্রোডাক্ট দেখুন।
* Responsive ডিজাইন।

---

## **3. Tech Stack / প্রযুক্তি**

**English:**

* Frontend: React, Axios, React Router, Tailwind CSS
* Backend: Laravel, MySQL
* File Storage: Laravel Public Storage

**Bangla:**

* ফ্রন্টএন্ড: React, Axios, React Router, Tailwind CSS
* ব্যাকএন্ড: Laravel, MySQL
* ফাইল সংরক্ষণ: Laravel Public Storage

---



This Section for Developer:-

## **4. Installation / ইন্সটলেশন**

**English:**

1. Clone the repository:

   ```bash
   git clone <repo-url>
   ```
2. Backend setup:

   ```bash
   cd backend
   composer install
   cp .env.example .env
   php artisan key:generate
   php artisan migrate
   php artisan serve
   ```
3. Frontend setup:

   ```bash
   cd frontend
   npm install
   npm run dev
   ```
4. Admin Login:

   * Email: `admin@minaconsol.com`
   * Password: `Admin@12345`

**Bangla:**

1. রেপোজিটরি ক্লোন করুন:

   ```bash
   git clone <repo-url>
   ```
2. ব্যাকএন্ড সেটআপ:

   ```bash
   cd backend
   composer install
   cp .env.example .env
   php artisan key:generate
   php artisan migrate
   php artisan serve
   ```
3. ফ্রন্টএন্ড সেটআপ:

   ```bash
   cd frontend
   npm install
   npm run dev
   ```
4. অ্যাডমিন লগইন:

   * ইমেইল: `admin@minaconsol.com`
   * পাসওয়ার্ড: `Admin@12345`

---

## **5. Database Structure / ডাটাবেস কাঠামো**

**English:**

* `courses` table: `id, course_name, details, instructor_name, section, media (array), created_at, updated_at`
* `products` table: `id, product_name, type (import/export), sub_section, country_name, hs_code, description, price, media (array), created_at, updated_at`

**Bangla:**

* `courses` টেবিল: `id, course_name, details, instructor_name, section, media (array), created_at, updated_at`
* `products` টেবিল: `id, product_name, type (import/export), sub_section, country_name, hs_code, description, price, media (array), created_at, updated_at`

---

## **6. Media Handling / মিডিয়া হ্যান্ডলিং**

**English:**

* All media files are stored in `public/storage/courses` and `public/storage/products`.
* Supported formats: `png, jpg, jpeg, mp4, pdf`.
* Frontend dynamically displays all uploaded media.

**Bangla:**

* সব মিডিয়া ফাইল সংরক্ষিত হয় `public/storage/courses` এবং `public/storage/products`-এ।
* সাপোর্টেড ফাইল টাইপ: `png, jpg, jpeg, mp4, pdf`।
* ফ্রন্টএন্ড স্বয়ংক্রিয়ভাবে সব আপলোডকৃত মিডিয়া প্রদর্শন করে।

---

## **7. Notes / টিপস**

**English:**

* Use unique section names for courses to avoid conflicts.
* Products must have a type (import/export) and optional sub-section.
* Adding a large number of courses/products will not crash the backend if server resources are sufficient.

**Bangla:**

* কোর্সের জন্য ইউনিক সেকশন নাম ব্যবহার করুন।
* প্রোডাক্টে type (import/export) এবং optional sub-section থাকতে হবে।
* পর্যাপ্ত সার্ভার রিসোর্স থাকলে অনেকগুলো কোর্স বা প্রোডাক্ট যোগ করলে ব্যাকএন্ড ক্র্যাশ হবে না।

