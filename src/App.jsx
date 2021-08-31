import React, { useState } from "react";
import {
  Icon,
  Radio,
  RadioGroup,
  Card,
  TextField,
  DataField,
} from "./components";
import { currency } from "./utils";
function App() {
  const [{ tipAmount, totalPerPerson }, setForm] = useState({
    tipAmount: 0,
    totalPerPerson: 0,
  });
  const [errorState, setErrorState] = useState(false);
  /**
   * @param {Event} event
   */

  function onChange(target) {
    const form = Object.fromEntries(new FormData(target).entries());

    const data = {
      bill: Number(form.bill),
      tips:
        form.tips === "custom" ? Number(form.custom) || 0 : Number(form.tips),
      people: Number(form.people),
      custom: Number(form.custom) || 0,
    };

    data.bill > 0 && data.people <= 0
      ? setErrorState(true)
      : setErrorState(false);

    if (!data.people) {
      setForm({
        tipAmount: 0,
        totalPerPerson: 0,
      });
      return;
    }

    const tip = data.bill * (data.tips / 100);
    const tipAmount = Math.round((tip / data.people) * 100) / 100;
    const totalPerPerson =
      Math.round(((data.bill + tip) / data.people) * 100) / 100;
    setForm({ tipAmount, totalPerPerson });
  }

  return (
    <div>
      <header className="flex justify-center my-12">
        <h1 className="w-24 text-cyan-darkest">
          <Icon.Logo />
        </h1>
      </header>
      <main className="sm:flex sm:justify-center">
        <Card className="bg-white rounded-t-2xl sm:rounded-2xl sm:w-[920px]">
          <form
            className="flex flex-col sm:flex-row space-y-8 sm:space-x-8"
            onChangeCapture={(event) => onChange(event.currentTarget)}
            onResetCapture={(event) =>
              requestAnimationFrame(() => onChange(event.target))
            }
          >
            <div className="flex flex-col space-y-8 sm:w-1/2">
              {/* Bill */}
              <TextField
                id="bill"
                label="Bill"
                icon={<Icon.Dollar />}
                value="0"
                min="0"
              />

              {/* Select Tip */}
              <RadioGroup label="Select Tip %" id="tips">
                <Radio label="5%" value="5" checked />
                <Radio label="10%" value="10" />
                <Radio label="15%" value="15" />
                <Radio label="25%" value="25" />
                <Radio label="50%" value="50" />
                <Radio label="Custom" value="custom" custom />
              </RadioGroup>

              {/* Number of People */}
              <TextField
                id="people"
                label="Number of People"
                icon={<Icon.Person />}
                value="0"
                min="0"
                error={errorState}
              />
            </div>

            {/* Present */}
            <Card className="bg-cyan-darker rounded-xl space-y-6 sm:w-1/2 flex flex-col justify-between">
              <div className="space-y-4">
                <DataField
                  title="Tip Amount"
                  note="/ person"
                  value={currency(tipAmount)}
                />
                <DataField
                  title="Total"
                  note="/ person"
                  value={currency(totalPerPerson)}
                />
              </div>

              <button
                type="reset"
                className="bg-cyan-light py-2 rounded w-full text-cyan-text text-xl font-bold "
              >
                RESET
              </button>
            </Card>
          </form>
        </Card>
      </main>
    </div>
  );
}

export default App;
