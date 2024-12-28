# Shared-devcontainer ralavel の使い方

## このワークコンテナについて

Alpine ベースの PHP コンテナ。
Laravel を使った開発用を想定。

### インストール済み
Dockerfile、および .devcontainer/devcontainers.json 参照。

### プロジェクト初期化（カレントディレクトリ）
```sh
composer create-project --prefer-dist laravel/laravel .
```

### コンポーネント作成
```sh
php artisan make:component HelloWorld --inline
```
```php
<?php

namespace App\View\Components;

use Illuminate\View\Component;

class HelloWorld extends Component
{
    public function render()
    {
        return <<<HTML
            <div>
                <p>Hello, world</p>
            </div>
        HTML;
    }
}
?>
```

### トップベージ
`resources/views/welcome.blade.php`
```php
<x-hello-world />
```

### ルーティング
`routes/web.php`
```php
<?php
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
?>
```

### サーバ起動
```sh
php artisan serve
```
http://localhost:8000 にアクセス。

## Optinal
