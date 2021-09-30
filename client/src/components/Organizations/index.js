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
  Button
} from "./OrganizationsStyles";
import { organizations } from "../../constants/projectConstants";
import {Link} from "react-router-dom";

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
              <Button>
              <Link to="/Donation" style={{ display: 'flex', alignItems: 'center', color:"rgb(83, 152, 204)", textDecoration:"none" }}>Donate Now</Link>
              </Button>
            </UtilityList>
            
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Organizations;
