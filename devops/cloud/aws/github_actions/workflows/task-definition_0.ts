module.exports = {
    requiresCompatibilities: [
        "FARGATE"
    ],
    "inferenceAccelerators": [],
    "containerDefinitions": [
        {
            "name": "nutrition-1919",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-healthmonkstart994171-1919-nutrition:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8012",
                    "protocol": "tcp",
                    "hostPort": "8012"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@healthmonkstart994171.local:27017/healthmonkstart994171_1919?authSource=admin"},{"name":"MONGO_DOMAIN","value":"healthmonkstart994171.local"},{"name":"CAMUNDAPOD_URL","value":"http://healthmonkstart994171.local:8080"},{"name":"SECURITYURL","value":"http://healthmonkstart994171.local:8003"},{"name":"AUTHPROXYURL","value":"http://healthmonkstart994171.local:8001"},{"name":"ADMINURL","value":"http://healthmonkstart994171.local:8004"},{"name":"CAMUNDAURL","value":"http://healthmonkstart994171.local:8002"},{"name":"GCAMURL","value":"http://healthmonkstart994171.local:8007"},{"name":"APIGATEWAY","value":"http://healthmonkstart994171.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "healthmonkstart994171"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/healthmonkstart994171",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "nutrition-1919",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-healthmonkstart994171-1919-nutrition:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8013",
                    "protocol": "tcp",
                    "hostPort": "8013"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@healthmonkstart994171.local:27017/healthmonkstart994171_1919?authSource=admin"},{"name":"MONGO_DOMAIN","value":"healthmonkstart994171.local"},{"name":"CAMUNDAPOD_URL","value":"http://healthmonkstart994171.local:8080"},{"name":"SECURITYURL","value":"http://healthmonkstart994171.local:8003"},{"name":"AUTHPROXYURL","value":"http://healthmonkstart994171.local:8001"},{"name":"ADMINURL","value":"http://healthmonkstart994171.local:8004"},{"name":"CAMUNDAURL","value":"http://healthmonkstart994171.local:8002"},{"name":"GCAMURL","value":"http://healthmonkstart994171.local:8007"},{"name":"APIGATEWAY","value":"http://healthmonkstart994171.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "healthmonkstart994171"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/healthmonkstart994171",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
    ],
    "volumes": [
        {
        "fsxWindowsFileServerVolumeConfiguration": null,
        "efsVolumeConfiguration": {
            "transitEncryptionPort": null,
            "fileSystemId": `${process.env.EFS_ID}`,
            "authorizationConfig": {
            "iam": "DISABLED",
            "accessPointId": null
            },
            "transitEncryption": "DISABLED",
            "rootDirectory": "/"
        },
        "name": "healthmonkstart994171",
        "host": null,
        "dockerVolumeConfiguration": null
        }
    ],
    "networkMode": "awsvpc",
    "memory": "4096",
    "cpu": "1024",
    "executionRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`,
    "family": "healthmonkstart9941710",
    "tags": [],
    "placementConstraints": [],
    "taskRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`

};
var ConfigurationJSON = JSON.stringify(module.exports);
const config = module.exports;

const jsonConfig = JSON.parse(JSON.stringify(ConfigurationJSON))

console.log(jsonConfig)
