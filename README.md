# Skillpath — WebVeda Junior Developer Assignment

A responsive landing page for **Skillpath**, a fictional learning platform, built as part of the WebVeda Junior Developer technical assignment.

The project combines a Framer-designed landing page with a React + TypeScript course section that consumes live API data.

## 🔗 Project Links

* **Live Website:**  https://web-veda.netlify.app/
* **Live Framer Website:** https://soulful-attributes-275108.framer.app/
* **GitHub Repository:** https://github.com/satishnikale/skillpath-web-veda
* **AI Conversation:** https://chatgpt.com/c/6a81736f-c0b8-83e8-898c-a05e95e7ae4c, https://chatgpt.com/c/6a81512e-db04-83e8-a9a3-7d648ab5d7c8

---

## ✨ Features

### Landing Page

The page contains three main sections:

* Hero section
* Dynamic Explore Courses section
* Footer

The layout is responsive across desktop, tablet, and mobile screen sizes.

### Dynamic Courses

The Courses section fetches live course data from the provided API instead of using hardcoded course data.

Courses API:

```text
GET https://syncsphere-hiv6.onrender.com/assignment/course-data
```

The number of courses returned by the API can change between requests, so the UI dynamically renders the available courses.

Each course displays:

* Course name
* Description
* Price
* Main category
* Refundable badge when applicable

### Country-Based Currency

The country is fetched independently from:

```text
GET https://syncsphere-hiv6.onrender.com/assignment/country-code
```

The API returns either:

```json
{
  "country_code": "IN"
}
```

or:

```json
{
  "country_code": "US"
}
```

Currency is determined based on the returned country.

For India:

```text
pricePaise / 100
```

For the United States:

```text
priceUsdCents / 100
```

Prices are formatted using `Intl.NumberFormat` so that values are displayed correctly.

For example:

```text
199900 paise → ₹1,999
3999 cents → $39.99
```

### Independent API Failure Handling

The Courses API and Country API are handled independently.

If the Courses API succeeds but the Country API fails, the valid course data is still displayed and the price can be shown as unavailable rather than guessing the currency.

Similarly, a failure in the Courses API does not result in a blank page.

### Loading State

A skeleton loading state is displayed while course data is being fetched.

### Error State

The course section provides a user-friendly error state when the API request fails.

The UI does not expose raw JavaScript or network errors to the user.

A Retry action is provided to attempt the failed request again.

### Empty State

If the Courses API successfully returns an empty array, the UI displays:

```text
No courses available right now.
```

### Responsive Course Grid

The course grid adapts to the available width:

| Screen  | Columns |
| ------- | ------: |
| Desktop |       3 |
| Tablet  |       2 |
| Mobile  |       1 |

The number of cards is dynamic and is not hardcoded.

---

## 🛠️ Tech Stack

* React
* TypeScript
* Vite
* CSS
* Framer
* Fetch API

The implementation intentionally avoids unnecessary libraries and abstractions so that the code remains simple and easy to understand.

---

## 📁 Project Structure

The main course component is organized separately from the rest of the application.

A simplified structure is:

```text
src/
├── components/
│   └── courses/
│       └── CourseSection.tsx
├── App.tsx
├── main.tsx
└── ...
```

The course component contains the API fetching, state management, rendering, loading, error, empty, and responsive UI logic.

---

## 🎛️ Framer Property Controls

The Courses Code Component exposes exactly two useful property controls:

### `sectionTitle`

Controls the title displayed above the course grid.

Default:

```text
Explore Courses
```

### `cardGap`

Controls the spacing between course cards.

Default:

```text
20
```

Both controls affect the rendered UI directly and can be changed from the Framer properties panel.

---

## 🔄 API Flow

The component performs two independent GET requests.

```text
                Skillpath Course Section
                         │
             ┌───────────┴───────────┐
             │                       │
             ▼                       ▼
       Courses API             Country API
             │                       │
             ▼                       ▼
        Course data             Country code
             │                       │
             └───────────┬───────────┘
                         ▼
                   Render UI
```

The two requests are intentionally independent.

This avoids a situation where a country API failure prevents valid course information from being displayed.

---

## ⚠️ API Failure Handling

The assignment API intentionally fails occasionally.

The implementation handles:

* HTTP 404
* HTTP 500
* Network failures
* Empty responses
* Loading state
* Retry
* Aborted requests

The code checks `response.ok` before processing the response.

An `AbortController` is also used to prevent unnecessary state updates when the component is unmounted while a request is still running.

---

## 💰 Currency Formatting

The application does not treat `pricePaise` or `priceUsdCents` as normal currency values.

For India:

```ts
pricePaise / 100
```

For the US:

```ts
priceUsdCents / 100
```

The resulting amount is formatted with `Intl.NumberFormat`.

This prevents incorrect formatting such as:

```text
199900 → ₹1,99,900
```

Instead, it correctly displays:

```text
199900 → ₹1,999
```

---

## 🚀 Running the Project Locally

Clone the repository:

```bash
git clone https://github.com/satishnikale/skillpath-web-veda.git
```

Navigate into the project:

```bash
cd skillpath-web-veda
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at the local URL shown by Vite.

---

## 🧪 Testing Checklist

The following scenarios were considered while implementing the course section:

* [x] Courses load successfully
* [x] Course count can change dynamically
* [x] Course name is displayed
* [x] Course description is displayed
* [x] Description is visually limited to two lines
* [x] Course category is displayed
* [x] Correct Indian currency conversion
* [x] Correct US currency conversion
* [x] `Intl.NumberFormat` used for currency formatting
* [x] Refundable badge shown only when applicable
* [x] Courses API error handled
* [x] Country API error handled independently
* [x] Empty course response handled
* [x] Loading state displayed
* [x] Retry action implemented
* [x] 3-column desktop layout
* [x] 2-column tablet layout
* [x] 1-column mobile layout
* [x] No fixed course count assumption
* [x] No hardcoded course data used for the dynamic course section
* [x] Only GET requests are used
* [x] AbortController used for request cleanup

---

## 🤖 AI Usage

I used **ChatGPT** during the development of this assignment.

AI was primarily used to:

* Discuss the implementation approach
* Review the API and error-handling requirements
* Help structure the React/TypeScript component
* Explain React concepts and implementation decisions
* Review and troubleshoot issues during development

I reviewed, modified, tested, and understood the implementation rather than treating the generated code as a black box.

The goal was to keep the final implementation simple enough that I can explain and modify the code during the technical discussion.

### AI Conversation

The complete relevant AI conversation is available here:

https://chatgpt.com/c/6a81736f-c0b8-83e8-898c-a05e95e7ae4c, https://chatgpt.com/c/6a81512e-db04-83e8-a9a3-7d648ab5d7c8


---

## 📝 Reflection

### What I'd Fix With Two More Days

With two additional days, I would spend more time refining the visual design and interaction details of the course cards. I would also improve the loading and error states further and perform additional testing across different Framer container widths and network conditions.

### Where I Got Stuck

One area that required additional thought was handling the two APIs independently. The country request should not prevent valid course data from being displayed when it fails. I also had to pay attention to the API's use of paise and cents rather than directly treating the returned values as display-ready currency amounts.

### What I'm Not Completely Happy With

The implementation intentionally prioritizes simplicity and reliability over adding extra features. With more time, I would refine some visual details and make the loading, error, and empty states feel more integrated with the overall landing page design.

---

## 👨‍💻 Author

**Satish Nikale**

Live Project:

https://web-veda.netlify.app/

GitHub:

https://github.com/satishnikale/skillpath-web-veda

Live Framer Project:

https://soulful-attributes-275108.framer.app/
