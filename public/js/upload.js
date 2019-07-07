const uppy = Uppy.Core()
  .use(Uppy.Dashboard, {
    inline: true,
    target: '#drag-drop-area',
  })
  .use(Uppy.Tus, {endpoint: 'https://master.tus.io/files/'});

uppy.on('complete', result => {
  console.log(
    'Upload complete! We’ve uploaded these files:',
    result.successful,
  );
});
