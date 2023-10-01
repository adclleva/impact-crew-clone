// pages/AddAvailabilityCheck.tsx
import { AvailabilityCheck, useAvailability } from "../contexts/AvailabilityContext";

export default function AddAvailabilityCheck() {
  const { addAvailabilityCheck } = useAvailability();

  const handleSubmit = () => {
    const newCheck: AvailabilityCheck = {
      description: "My new film",
      startDate: new Date("2023-11-01"),
      endDate: new Date("2023-12-01"),
      status: "pending",
    };

    addAvailabilityCheck(newCheck);
  };

  return (
    <div>
      <h1>Add Availability Check</h1>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
