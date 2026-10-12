---
title: Partner Network
certPartners:
  - name: Orchitech s.r.o.
    url: https://orchi.tech/en/
    logo: orchitech.png
implPartners:
  - name: Orchitech s.r.o.
    url: https://orchi.tech/en/
    logo: orchitech.png
    email: info@orchitech.cz
    region: Europe
  - name: Ideal IT Solutions s.r.o.
    url: https://idealit.cz/
    logo: idealit.png
    email: info@idealit.cz
    region: Europe
  - name: Sonpo
    url: https://www.sonpo.cz/en/
    logo: sonpo.png
    email: sales@sonpo.eu
    region: Europe
  - name: J3AG, s.r.o.
    url: https://www.j3ag.cz/
    logo: j3ag.png
    email: info@j3ag.cz
    region: Europe
  - name: eBZ
    url: https://www.ebz.tec.br/HomePage
    logo: eBZ.png
    email: contato@ebz.tec.br
    region: South America
infraPartners:
  - name: JFrog
    url: https://jfrog.com/artifactory/
    logo: jfrog-artifactory.png
  - name: Docker
    url: https://hub.docker.com/
    logo: docker.png
  - name: GitHub
    url: https://github.com/
    logo: github.png
---

<script setup>
import { useData } from 'vitepress'
import { VPButton } from 'vitepress/theme';

const { frontmatter } = useData()
</script>

# Partner Network

Wren Security partners provide implementation expertise, architecture guidance, migration services, and production support for organizations deploying and maintaining Wren Security.

The Wren Security partner ecosystem brings together the core maintainer and implementation partners supporting the deployment and long-term operation of Wren Security.

## Technical Expertise

Wren Security is developed and maintained by Orchitech, the project's core maintainer and a long-term contributor to its architecture.

Orchitech provides services for organizations running Wren Security in production or planning complex IAM projects, including:

- IAM architecture and implementation
- migrations from OpenAM, OpenIDM, and other legacy IAM platforms
- architecture reviews and technical guidance
- production support and SLAs
- complex integration and deployment support

<Partners :data="frontmatter.certPartners" />

## Implementation Partners

Implementation partners are system integrators and IAM consultants with experience designing, deploying, integrating, and maintaining Wren Security environments.

<CardGrid :columns="2">
  <PartnerCard v-for="partner of frontmatter.implPartners" :key="partner.name" :partner="partner" variant="outline-soft" />
</CardGrid>

## Special Thanks

Wren Security is part of the broader culture of open source and free software, supported by companies that make valuable services and infrastructure available to open-source projects. Their contributions help keep Wren Security open, accessible, and available to the community.

- **JFrog Artifactory** provides repository infrastructure for hosting Wren Security Maven dependencies and project artifacts.
- **Docker Hub** supports Wren Security through the Docker-Sponsored Open Source Program, providing infrastructure for distributing official container images.
- **GitHub** hosts the Wren Security source repositories and supports collaborative development and automated build workflows.

<Partners :data="frontmatter.infraPartners" />

<ActionBanner class="wren-support-banner">
  <template #title>
    Implementation & Production Support
  </template>
  <template #description>
    Implementation support, legacy IAM migrations, architecture guidance, and production SLAs are available through Wren Security partners.
  </template>
  <template #actions>
    <VPButton theme="alt" text="Talk to a Partner" href="/partners/talk-to-a-partner" />
  </template>
</ActionBanner>
<ActionBanner class="wren-solution-banner">
  <template #title>
    Deliver Enterprise IAM Solutions
  </template>
  <template #description>
    The Wren Security partner ecosystem is open to IAM consultants and system integrators delivering Wren Security-based solutions for their clients.
  </template>
  <template #actions>
    <VPButton theme="alt" text="Become a Partner" href="/partners/become-a-partner" />
  </template>
</ActionBanner>

<style scoped>
.wren-action-banner.wren-support-banner {
  margin-top: 48px;
}
.wren-action-banner.wren-solution-banner {
  margin-top: 24px;
}
</style>
