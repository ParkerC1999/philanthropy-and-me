import React from "react";
import {
  Section,
  SectionTitle,
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./OrganizationsStyles";
import { organizations } from "../../constants/projectConstants";

const Organizations = () => (
  <Section nopadding id="organizations">
    <SectionTitle main>Support an Organization</SectionTitle>
    <GridContainer>
      {organizations.map((p, i) => {
        return (
          <BlogCard key={i}>
            <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={p.site}>Visit</ExternalLinks>
              <ExternalLinks href={p.donate}>Donate Now</ExternalLinks>
            </UtilityList>
            
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Organizations;
