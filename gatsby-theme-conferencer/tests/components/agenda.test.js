import React from "react";
import { describe, it } from "@jest/globals";
import renderer from "react-test-renderer";
import Agenda from "../../src/components/Agenda";
import AgendaConfigFixture from "../__fixtures/AgendaConfig";
import SpeakerFixture from "../__fixtures/Speaker";

describe("Agenda", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Agenda agenda={AgendaConfigFixture} speakers={[SpeakerFixture]} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
