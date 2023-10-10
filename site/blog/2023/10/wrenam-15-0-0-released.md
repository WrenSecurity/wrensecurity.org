---
title: Wren:AM 15.0.0 Released
date: 2023-10-10
excerpt: |
  We're thrilled to announce the release of the anticipated new version of Wren:AM.
  Take a closer look at the carefully curated changes that we have worked on.
sidebar: false
---

<Post>
We're thrilled to announce the release of the anticipated new version of Wren:AM. Following Wren:IDM and Wren:DS, it's now completely independent of the legacy infrastructure, features an upgraded technology stack, and is compatible with JDK 17 (with preparations for Jakarta EE). Additionally, we've addressed a significant number of issues from previous versions, predominantly the security ones.
The project remains highly compatible with abandoned community versions of OpenAM, allowing for a seamless migration process, with the added option to leverage Docker images for added convenience.

Numbers worth mentioning include:

* 89 pull requests merged;
* 136 new commits;
* 22 issues closed;
* 27 known AM security vulnerabilities fixed;
* 35 Dependabot alerts fixed;
* 93 security issues (reported by Trivy) fixed.

If you're already running Wren:AM or an unsupported version of OpenAM, we strongly recommend upgrading to get the best out of your access management solution.


## Changes

List of significant changes:

* Upgraded build pipeline (wrensec-parent, JFrog repository, GitHub Actions)
* Upgraded dependencies (including switch to Jakarta compatible coordinates)
* Added support for Java 17 as the default build and runtime environment
* Added Dockerfile and official images published to Docker Hub
* Fixed ton of security, build and runtime issues

Review all the changes on [GitHub](https://github.com/WrenSecurity/wrenam/releases/15.0.0).

## How to get

Refer to the [Getting Started](https://docs.wrensecurity.org/wrenam/latest/getting-started.html) page to learn how to get and run Wren:AM.

Alternatively you can run the official Docker image from [Docker Hub](https://hub.docker.com/r/wrensecurity/wrenam):

```bash
docker run --rm --name wrenam-test -p 8080:8080 wrensecurity/wrenam:15.0.0
```

</Post>
