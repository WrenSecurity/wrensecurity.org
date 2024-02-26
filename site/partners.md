---
title: Partners
sidebar: false
---

<script setup>
  const certPartners = [
    { name: 'orchitech', url: 'https://orchi.tech/en/', logo: 'orchitech.png' }
  ];
  const implPartners = [
    { name: 'orchitech', url: 'https://orchi.tech/en/', logo: 'orchitech.png' },
    { name: 'j3ag', url: 'https://www.j3ag.cz/', logo: 'j3ag.png' },
    { name: 'sonpo', url: 'https://www.sonpo.cz/en/', logo: 'sonpo.png' },
    { name: 'digitcorp', url: 'https://digitcorp.cz/', logo: 'digitcorp.png' },
  ];
  const infraPartners = [
    { name: 'jfrog', url: 'https://jfrog.com/artifactory/', logo: 'jfrog-artifactory.png' },
  ];
</script>

# Partners

The following is a list of Wren Security partners.
Partners are listed in no particular order within each section.


### Authorized certifying partner

<Partners :data="certPartners" />

### Implementation partners

<Partners :data="implPartners" />

### Infrastructure partners

<Partners :data="infraPartners" />
