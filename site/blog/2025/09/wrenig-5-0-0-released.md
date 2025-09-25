---
title: Wren:IG 5.0.0 Released
date: 2025-09-25
excerpt: |
  We are excited to announce the release of Wren:IG 5.0.0. This release is the first official
  Wren Security release compatible with JDK 21 and zero dependencies on legacy infrastructure.
sidebar: false
---

<Post>

We are excited to announce that the brand new release of [Wren:IG 5.0.0](https://github.com/WrenSecurity/wrenig/releases/5.0.0)
is finally out! This is the first release of Wren:IG that is fully independent of the legacy
infrastructure. Its technological stack has been updated to be compatible with JDK 21, and all
changes have been carefully curated to provide a high level of security while still offering
a reliable migration path from legacy OpenIG installations.

If you are already running Wren:IG or an unsupported version of OpenIG, we strongly recommend
that you upgrade, as only the new versions will receive the support they deserve.

## Changes

List of significant changes:

* Add Java 21 support and drop Java 8 support
* Change Maven `groupId` to `org.wrensecurity.wrenig`
* Upgrade to the newest `wrensec-parent` and `wrensec-commons`
* Upgrade UI components
* Switch to GitHub Actions for CI, create new project for system testing
* Add docker build with amd64 and arm64 support and Docker Hub publishing pipeline


## How to get

Refer to the [Getting Started](https://docs.wrensecurity.org/wrenig/latest/getting-started.html) page to learn how to get and run Wren:IG.

Alternatively you can run the official Docker image from [Docker Hub](https://hub.docker.com/r/wrensecurity/wrenig):

```bash
docker run --rm --name wrenig-test -p 8080:8080 wrensecurity/wrenig:5.0.0
```

</Post>
