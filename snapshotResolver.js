module.exports = {
  resolveSnapshotPath: (testPath, snapshotExtension) =>
    '__snapshots__' + testPath.substring(testPath.indexOf('/src')) + snapshotExtension,
  resolveTestPath: (snapshotFilePath, snapshotExtension) =>
    snapshotFilePath
      .replace('__snapshots__', '')
      .slice(0, -snapshotExtension.length),
  testPathForConsistencyCheck: 'some/example.test.js'
}
