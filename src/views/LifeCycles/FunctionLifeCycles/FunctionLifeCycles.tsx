import { useState } from "react";

import StateSection from "./state";
import EffectSection from "./effect";
import ContextSection from "./context";
import RefSection from "./ref";
import ReducerSection from "./reducer";
import MemoSection from "./memo";
import CallbackSection from "./callback";
import Card from "../../../components/Card";
import "./styles.css";

const SECTIONS = [
  { section: StateSection },
  { section: EffectSection },
  { section: ContextSection },
  { section: ReducerSection },
  { section: MemoSection },
  { section: CallbackSection },
  { section: RefSection },
];

export default function FunctionLifeCycles() {
  const [selectedSection, setSelectedSection] = useState(0);
  const Section = SECTIONS[selectedSection].section;

  const nextSection = () => {
    if (selectedSection < SECTIONS.length - 1) {
      setSelectedSection(selectedSection + 1);
    }
  };

  const prevSection = () => {
    if (selectedSection > 0) {
      setSelectedSection(selectedSection - 1);
    }
  };

  return (
    <div className="function-lifecycle">
      <Card prevSection={prevSection} nextSection={nextSection}>
        <Section />
      </Card>
    </div>
  );
}
