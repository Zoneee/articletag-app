﻿using System;
using System.Threading.Tasks;
using Businesses.Dto;
using Businesses.ViewModels.Requsets;
using Entity.Entities;
using Entity.Enum;
using FreeSql;

namespace Businesses.Interfaces
{
    public interface IArticleTaggedRecordRepository : IBaseRepository<ArticleTaggedRecord, long>
    {
        Task<bool> AuditArticleAsync(AuditArticleRequest article);

        Task<bool> CheckCanAuditAsync(long articleId);

        Task<bool> CheckCanEditAsync(long articleId);

        Task<ArticleDto> GetArticleAsync(long id);

        Task<ArticleDto> GetArticleByTaggerIdAsync(long taggerId);

        Task<TaggedRecordDto> GetArticlesByPagingAsync(long userid, int page, int size, TagArticleStatusEnum? status, bool? review, string taggerNickName);

        Task<ArticleDto> GetCanAuditArticleByTaggerIdAsync(long taggerId);

        Task<TaggerDto> GetTaggerByArticleTaggedRecordIdAsync(long recordId);

        Task<WorkloadDto> GetWorkloadAsync(DateTime? startDate, DateTime? endDate, int page, int size);

        Task<bool> SaveTaggedRecordAsync(ArticleRecordRequest record);

        Task<bool> SetReviewArticleAsync(long articleId, bool review);

        Task<bool> SetUnavailArticleAsync(long articleId);

        Task<bool> SubmitAuditAsync(long articleId);
    }
}
