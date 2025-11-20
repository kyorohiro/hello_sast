## macos

```
brew install semgrep
```

## linux

```
pip install semgrep
```

## scan

```
semgrep scan \
  --config p/owasp-top-ten \
  --config p/nodejs \
  --config auto \
  . > ./sast_report.txt 2>&1
```

```
semgrep scan --config no-eval.yaml .
```
