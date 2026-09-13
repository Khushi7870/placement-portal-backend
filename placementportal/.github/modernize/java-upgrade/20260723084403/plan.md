# Upgrade Plan: placementportal (20260723084403)

- **Generated**: 2026-07-23 08:45:00
- **HEAD Branch**: N/A
- **HEAD Commit ID**: N/A

## Available Tools

**JDKs**
- JDK 24.0.1: C:\Program Files\Java\jdk-24\bin (available on PATH; not target)
- JDK 21: **<TO_BE_INSTALLED>** (required by step 1 and step 3)

**Build Tools**
- Maven Wrapper: 3.9.16 (`.mvn/wrapper/maven-wrapper.properties`)
- Maven installation: not available locally; wrapper will be used

## Guidelines

> Note: You can add any specific guidelines or constraints for the upgrade process here if needed, bullet points are preferred.

## Options

- Working branch: appmod/java-upgrade-20260723084403
- Run tests before and after the upgrade: true

## Upgrade Goals

- Upgrade Java runtime to Java 21 (latest LTS as of 2026-07)

## Technology Stack

| Technology/Dependency | Current | Min Compatible | Why Incompatible |
| --------------------- | ------- | -------------- | ---------------- |
| Java | 17 | 21 | User requested latest LTS runtime upgrade |
| Spring Boot | 4.1.0 | 4.1.0 | Current version already compatible with Java 21 |
| Maven Wrapper | 3.9.16 | 3.9.16 | Compatible with Java 21 |
| lombok | 1.0 | managed by Spring Boot BOM | No direct version pin; compatible with Java 21 via BOM |

## Derived Upgrades

- Java 17 → Java 21: required by user request for the latest LTS runtime.
- No Spring Boot version change required because Spring Boot 4.1.0 already supports Java 21.
- No build tool version change required beyond the existing Maven Wrapper 3.9.16.

## Impact Analysis

### Dependency Changes

| File | Dependency | Current | Action | Target | Reason |
|------|------------|---------|--------|--------|--------|
| pom.xml | `<java.version>` | 17 | upgrade | 21 | Upgrade project source/target runtime to Java 21 |

### Source Code Changes

| File | Location | Current | Required Change | Reason |
|------|----------|---------|----------------|--------|
| None detected | N/A | N/A | N/A | No direct Java 21 source compatibility issues found in project sources |

### Configuration Changes

| File | Property/Setting | Current | Required Change | Reason |
|------|------------------|---------|-----------------|--------|
| None detected | N/A | N/A | N/A | No configuration changes required for Java 21 upgrade |

### CI/CD Changes

| File | Location | Current | Required Change |
|------|----------|---------|-----------------|
| None detected | N/A | N/A | N/A |

### Risks & Warnings

- **Baseline JDK unavailable**: Java 17 is not installed locally, so the baseline compile/test step will be skipped if the base JDK cannot be sourced. This is acceptable for this upgrade because the current active local JDK is Java 24 and the target is Java 21.
- **Target JDK install dependency**: JDK 21 must be installed before final validation. If installation fails, the project may still compile on Java 24, but the upgrade target will not be strictly validated on the requested runtime.

## Upgrade Steps

- Step 1: Setup Environment
  - **Rationale**: Ensure the target JDK for Java 21 compilation is installed and the Maven wrapper is available for reproducible builds.
  - **Changes to Make**: Install or make available JDK 21 locally; confirm `.mvn/wrapper/maven-wrapper.properties` points to Maven 3.9.16.
  - **Verification**: `java -version` with JDK 21, `./mvnw -v`, expected success.

- Step 2: Baseline Setup
  - **Rationale**: Capture the current project baseline before changing the Java target.
  - **Changes to Make**: If Java 17 is available, run baseline compilation and tests with the current configuration.
  - **Verification**: `./mvnw clean compile test-compile -q && ./mvnw clean test -q`; skipped if Java 17 is unavailable.

- Step 3: Upgrade Java runtime to 21
  - **Rationale**: Apply the requested runtime upgrade with minimal change by updating the project Java version property.
  - **Changes to Make**: Update `<java.version>` in `pom.xml` from `17` to `21`.
  - **Verification**: `./mvnw clean test-compile -q` with JDK 21.

- Step 4: CVE Validation & Fix
  - **Rationale**: Confirm direct dependencies are not reporting known CVEs and apply patches if needed.
  - **Changes to Make**: Scan direct dependencies, upgrade any CVE-patched versions within the same compatibility lines, and recompile.
  - **Verification**: `./mvnw clean test-compile -q`; re-scan with `#appmod-validate-cves-for-java` until no direct CVE issues remain.

- Step 5: Final Validation
  - **Rationale**: Verify the upgraded project compiles and passes its full test suite on Java 21.
  - **Changes to Make**: Resolve any test failures or compile issues introduced by the new Java target.
  - **Verification**: `./mvnw clean test -q` with JDK 21; expect 100% pass rate.
