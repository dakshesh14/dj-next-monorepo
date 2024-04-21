from django.urls import path
# simple jwt
from rest_framework_simplejwt.views import TokenBlacklistView

from .views import (GoogleOAuthAPI, LoginAPI, MagicLinkGenerationAPI,
                    MagicLinkVerificationAPI, RefreshTokenAPI, RegisterAPI,
                    UserAPI)

app_name = "accounts-api"

urlpatterns = [
    path("login/", LoginAPI.as_view(), name="login"),
    path("register/", RegisterAPI.as_view(), name="register"),
    path("logout/", TokenBlacklistView.as_view(), name="logout"),
    # user related
    path("user/me/", UserAPI.as_view(), name="user"),
    # token related
    path("refresh-token/", RefreshTokenAPI.as_view(), name="refresh-token"),
    # o-auth
    path("google-login", GoogleOAuthAPI.as_view(), name="google-login"),
    # magic link
    path(
        "magic-link/generate/",
        MagicLinkGenerationAPI.as_view(),
        name="magic-link-generate",
    ),
    path(
        "magic-link/verify/",
        MagicLinkVerificationAPI.as_view(),
        name="magic-link-verify",
    ),
]
