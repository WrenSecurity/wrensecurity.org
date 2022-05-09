---
title: Wren:IDM 6.0.0 Released
date: 2021-10-08
excerpt: |
  We are excited to announce the release of Wren:IDM 6.0.0. This release is the first official
  Wren Security release compatible with JDK 11 and zero dependencies on legacy infrastructure.
sidebar: false
---

<Post>

We are excited to announce the release of Wren:IDM 6.0.0. Wren Security release compatible with
JDK 11 and zero dependencies on legacy infrastructure (everything you need to build the project
is hosted in JFrog Artifactory).

## Changes

List of significant changes:

* Change Maven parent to wrensec-parent (new Maven plugin versions, dedicated JFrog repository)
* Upgrade core dependencies (Apache Felix, Activiti, RhinoJS, ...)
* Support Java 11 as the default build and runtime environment
* Add Dockerfile and publish official image to Docker Hub
* Add GitHub Actions pipeline (switch from Semaphore CI)
* Replace OrientDB with H2 as the default playground database

## How to get

You can build your own binary as described by [README](https://github.com/WrenSecurity/wrenidm/blob/master/README.md#build-the-source-code).

Alternatively you can use the official Docker image from [Docker Hub](https://hub.docker.com/r/wrensecurity/wrenidm):

```bash
docker run --rm --name wrenidm-test -p 8080:8080 wrensecurity/wrenidm:6.0.0
```

</Post>
