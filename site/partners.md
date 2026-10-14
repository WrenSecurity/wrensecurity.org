---
title: Partners
description: Wren Security's certifying, implementation and infrastructure partners.
sidebar: false
---

<script setup>
  const certPartners = [
    { name: 'orchitech', url: 'https://orchi.tech/en/', logo: 'orchitech.png' }
  ];
  const implPartners = [
    { name: 'orchitech', url: 'https://orchi.tech/en/', logo: 'orchitech.png' },
    { name: 'idealit', url: 'https://idealit.cz/', logo: 'idealit.png' },
    { name: 'sonpo', url: 'https://www.sonpo.cz/en/', logo: 'sonpo.png' },
    { name: 'j3ag', url: 'https://www.j3ag.cz/', logo: 'j3ag.png' },
  ];
  const infraPartners = [
    { name: 'jfrog', url: 'https://jfrog.com/artifactory/', logo: 'jfrog-artifactory.png' },
  ];
</script>

# Partners

The following is a list of Wren Security partners.
Partners are listed in no particular order within each section.


### Authorized Certifying Partner

<Partners :data="certPartners" />

### Implementation Partners

<Partners :data="implPartners" />

### Infrastructure Partners

<Partners :data="infraPartners" />
