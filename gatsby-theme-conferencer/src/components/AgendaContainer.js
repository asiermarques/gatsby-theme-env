import React from "react";
import agendaMapper from "../lib/agendaMapper";
import { graphql, StaticQuery } from "gatsby";
import Agenda from "./Agenda";

const AgendaContainer = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            agenda {
              time_slots
              tracks {
                name
              }
              visible
            }
          }
        }
        allSpeakersYaml {
          nodes {
            slug
            image
            name
            bio
            company
            social {
              twitter
              github
              linkedin
            }
            talk {
              title
              description
            }
          }
        }
        allAgendaContentYaml {
          nodes {
            type
            content
            track
            slot
          }
        }
      }
    `}
    render={(data) => (
      <Agenda
        tracks={data.site.siteMetadata.agenda.tracks}
        agendaSlotMap={agendaMapper(
          data.allAgendaContentYaml.nodes,
          data.allSpeakersYaml.nodes
        )}
        visible={data.site.siteMetadata.agenda.visible}
      />
    )}
  />
);

export default AgendaContainer;
