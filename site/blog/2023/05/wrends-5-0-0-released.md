---
title: Wren:DS 5.0.0 Released
date: 2023-05-16
excerpt: |
  We are excited to announce the release of Wren:DS 5.0.0. This release is the first official
  Wren Security release compatible with JDK 17 and zero dependencies on legacy infrastructure.
sidebar: false
---

<Post>

We are excited to announce that the brand new release of [Wren:DS 5.0.0](https://github.com/WrenSecurity/wrends/releases/5.0.0)
is finally out! This is the first release of Wren:DS that is fully independent of the legacy
infrastructure. Its technological stack has been updated to be compatible with JDK 17, and all
changes have been carefully curated to provide a high level of security while still offering
a reliable migration path from legacy OpenDJ installations.

If you are already running Wren:DS or an unsupported version of OpenDJ, we strongly recommend
that you upgrade, as only the new versions will receive the support they deserve.

What's next? Wren:AM. Stay tuned!

## Changes

List of significant changes:

* Add Java 17 support and drop Java 8 support
* Change Maven `groupId` to `org.wrensecurity.wrends`
* Upgrade to the newest `wrensec-parent` and `wrensec-commons`
* Upgrade Berkley DB JE dependency and remove PDB backend
* Update visible project title and logo to Wren:DS
* Switch to GitHub Actions for CI, create new project for system testing
* Add docker build with amd64 and aarch64 support and Docker Hub publishing pipeline
* Remove or replace files with non-CDDL license


## How to get

Refer to the [Getting Started](https://docs.wrensecurity.org/wrends/latest/getting-started.html) page to learn how to get and run Wren:DS.

Alternatively you can run the official Docker image from [Docker Hub](https://hub.docker.com/r/wrensecurity/wrends):

```bash
docker run --rm --name wrends-test -p 1389:1389 -p 1636:1636 wrensecurity/wrends:5.0.0
```

</Post>
