
const AWS = require('aws-sdk')

const s3 = new AWS.S3()
s3.config.update({
    region:'my-region-1',
    apiVersion: '2006-03-01',
    signatureVersion: 'v4',
    accessKeyId: 'BooogaLooga', secretAccessKey: 'MamboNumberFive'
});

// Tried with and without this. Since s3 is not region-specific, I don't
// think it should be necessary.
// AWS.config.update({region: 'us-west-2'})

const myBucket = 'not-so-good-bucket';
const myKey = 'file-name.pdf'
const signedUrlExpireSeconds = 60 * 25;

const url = s3.getSignedUrl('putObject', {
    Bucket: myBucket,
    Key: myKey,
    Expires: signedUrlExpireSeconds,
    ContentType: 'application/pdf'
}, function(err, url){
    console.log('err = ', err);
    console.log('url = ', url);
});

// get a signed url for get
const getUrl = s3.getSignedUrl('getObject',{
    Bucket: myBucket,
    Key: myKey,
    Expires: signedUrlExpireSeconds
}, function(err, url){
    console.log('get, err = ', err);
    console.log('get url = ', url);
})