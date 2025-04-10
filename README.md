# Pxlhut Multi-Step Form with Validation

This is a multi-step form created with **React**, **Next.js**, **Zod**, **React Hook Form**, and **TailwindCSS**. It features validation for each step of the form, a "Next" and "Previous" button to navigate through the steps, and a summary of all entered data before submission.

---

## **Features**

- Multi-step form with **3 steps**:
  - **Step 1**: Personal Information
  - **Step 2**: Address Details
  - **Step 3**: Account Setup
- **Validation** using **Zod** for each input field.
- **React Hook Form** for form handling and state management.
- **TailwindCSS** for styling, including responsiveness.
- Ability to go **back and forth** between form steps using "Previous" and "Next" buttons.
- In the final step, a **summary** of the entered data is displayed before submission.
- The form data is stored in the local state using **useState** and **console logs** the submitted data.
  
## **Tech Stack**

- **Next.js** (App Router)
- **React Hook Form** for form handling
- **Zod** for schema validation
- **TailwindCSS** for styling


---

## **How to Run the Project**

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/AyeshaFerdous/pxlhut
    ```

2. Navigate to the project directory:

    ```bash
    cd pxlhut
    ```

3. Install the dependencies:

    ```bash
    pnpm install
    ```

4. Run the development server:

    ```bash
    pnpm dev
    ```

5. Open your browser and go to:

    ```
    http://localhost:3000
    ```

---



## **Form Steps & Validation**

### **Step 1: Personal Info**
- Full Name: Required.
- Email: Required, must be a valid email format.
- Phone Number: Required, must be at least 10 digits.

### **Step 2: Address Info**
- Street Address: Required.
- City: Required.
- Zip Code: Required, must only be numbers and at least 5 digits long.

### **Step 3: Account Setup**
- Username: Required, minimum 4 characters.
- Password: Required, minimum 6 characters.
- Confirm Password: Must match the password.

---

## **Bonus Features**


- **Responsiveness**: TailwindCSS is used to ensure the form is fully responsive across mobile, tablet, and desktop devices.


