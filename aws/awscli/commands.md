## list the contents of an s3 bucket
aws s3 ls

## copy files to another bucket
aws s3 cp --recursive source_bucket destination_bucket

## referencing an s3 bucket

s3://<bucket_name>

## example 

aws s3 cp --recursive /var/www/html/wp-content/uploads s3://acloudguru-wpmedia2017-calvin

aws s3 sync --delete /var/www/html/wp-content/uploads s3://acloudguru-wpmedia2017-calvin --dryrun
