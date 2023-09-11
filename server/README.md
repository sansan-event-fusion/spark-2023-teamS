## Laravel Sailの環境構築

### 前提条件
- 端末
    - Mac (Windowsは一部コマンドの修正が必要な可能性あり)
- ツール
    - Dockerがインストールされている
        - `docker -v `でバージョンが表示される
    - Docker Composeがインストールされている
        - `docker-compose --version`でバージョンが表示される

### 初期設定コマンド
※`server`フォルダをカレントディレクトリにする。<br>

Composer依存関係のインストール

```shell
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v $(pwd):/var/www/html \
    -w /var/www/html \
    laravelsail/php82-composer:latest \
    composer install --ignore-platform-reqs
```

.env.exampleをコピーし、.envを用意。TODO項目を入力。

```shell
cp .env.example .env
```

sail コマンドをエイリアス設定

```shell
alias sail='bash vendor/bin/sail'
```

Sailの立ち上げ<br>
docker-compose.ymlに記載されたサービスでコンテナが構築される。

```shell
sail up -d
```

ローカルDBのマイグレーション

```shell
sail artisan migrate
```

(必要に応じて)シード値として初期値をレコードに生成。

```shell
sail artisan db:seed
```

### artisanコマンドの実行
```shell
# Artisanコマンドをローカル環境で実行(Sailを利用する場合は使わない)
php artisan queue:work

# Laravel Sailの中でArtisanコマンドを実行
sail artisan queue:work
```

### Sailの停止

```shell
sail stop
```

### Sailを使う意義
- Laravel Sailを使用すると、アプリケーションはDockerコンテナー内で実行され、ローカルコンピューターから分離され、開発環境を統一することができる。
- セットアップを容易にする。
- 必要に応じてdocker-compose.ymlをカスタマイズすることで、異なるサービスや設定を簡単に追加・変更でき、柔軟性が高まる。
- SailとLaravelが互いに密接に結びついているため、Laravelのアップデートや変更に合わせて、Sailの環境も簡単にアップデートできる。
- セキュリティ
    - Dockerを使用して隔離された環境での開発により、異なるプロジェクトやアプリケーション間の依存関係や環境の競合を避けることができます。