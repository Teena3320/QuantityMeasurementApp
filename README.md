
## Use Case Breakdown

### UC1 – Create JSON Server Database
- Defines database schema for:
  - Units
  - Conversions
  - Calculation history
- Seeds initial unit and conversion data
- Enables RESTful endpoints using JSON Server

---

### UC2 – App Initialization
- Executes after DOM content is fully loaded
- Initializes global application state
- Sets default measurement type and action
- Loads initial unit lists and history data
- Attaches all event listeners

---

### UC3 – Fetch Units by Type
- Fetches unit data from backend using query parameters
- Loads units only for the selected measurement type
- Triggered whenever measurement type changes

---

### UC4 – Fetch Conversion Record
- Retrieves conversion data for a selected unit pair
- Supports:
  - Factor‑based conversions
  - Formula‑based conversions (Temperature)
- Handles missing or unsupported conversions gracefully

---

### UC5 – Save Calculation to History
- Saves successful calculations to backend history
- Stores:
  - Measurement type
  - Action performed
  - Expression
  - Result
  - Timestamp
- Does not block the UI if save fails

---

### UC6 – Load History
- Fetches calculation history from the backend
- Sorts history by latest timestamp
- Triggers UI rendering logic (UC14)

---

### UC7 – Apply Conversion
- Applies numeric conversion using:
  - Multiplication factor **OR**
  - Formula string (for temperature)
- Rounds results to 6 decimal places
- Validates numeric input before processing

---

### UC8 – Compare Two Values
- Compares two measurements normalized to a common unit
- Returns a human‑readable comparison message
- Handles:
  - Equal values
  - Greater‑than
  - Less‑than scenarios

---

### UC9 – Perform Arithmetic Operation
- Executes arithmetic operations:
  - Addition
  - Subtraction
  - Multiplication
  - Division
- Prevents division by zero
- Returns rounded numeric results

---

### UC10 – Populate Unit Dropdown
- Clears and repopulates unit `<select>` elements
- Adds a default disabled placeholder option
- Ensures clean and consistent UI updates

---

### UC11 – Set Active Button
- Manages `.active` CSS class for buttons
- Ensures only one button is active per group
- Used for:
  - Measurement types
  - Actions
  - Operators

---

### UC12 – Show Result
- Displays calculation results in the result panel
- Supports both numeric and text-based results
- Adds a visual highlight animation for feedback

---

### UC13 – Toggle Operator Row
- Displays operator buttons only in Arithmetic mode
- Hides operators during Conversion and Comparison
- Keeps UI clean and intuitive

---

### UC14 – Render History List
- Renders calculation history records in the UI
- Displays empty state when no history exists
- Formats timestamps for better readability

---

### UC15 – Handle Type Card Click
- Updates selected measurement type
- Reloads relevant units
- Clears inputs and results
- Resets internal application state

---

### UC16 – Handle Action Tab Click
- Updates selected action:
  - Conversion
  - Comparison
  - Arithmetic
- Toggles operator visibility
- Clears previous results

---

### UC17 – Execute Calculation
- Orchestrates the full calculation workflow
- Validates inputs
- Executes logic based on selected action
- Displays result
- Saves calculation to history
- Refreshes history panel

---
