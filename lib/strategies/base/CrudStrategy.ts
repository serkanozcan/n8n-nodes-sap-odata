import { IExecuteFunctions, INode, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { sanitizeErrorMessage } from '../../utils/SecurityUtils';
import * as StrategyHelpers from '../../utils/StrategyHelpers';

/**
 * Base class for CRUD operation strategies.
 * Delegates to StrategyHelpers for core functionality.
 */
export abstract class CrudStrategy {
	protected getServicePath(context: IExecuteFunctions, itemIndex: number): string {
		return StrategyHelpers.getServicePath(context, itemIndex);
	}

	protected getEntitySet(context: IExecuteFunctions, itemIndex: number): string {
		return StrategyHelpers.getEntitySet(context, itemIndex);
	}

	protected validateAndFormatKey(key: string, node: INode): string {
		return StrategyHelpers.validateAndFormatKey(key, node);
	}

	protected getQueryOptions(context: IExecuteFunctions, itemIndex: number): IDataObject {
		return StrategyHelpers.getQueryOptions(context, itemIndex);
	}

	protected extractResult(response: unknown): unknown {
		return StrategyHelpers.extractResult(response as IDataObject);
	}

	protected validateAndParseJson(dataString: string, fieldName: string, node: INode): IDataObject {
		return StrategyHelpers.validateAndParseJson(dataString, fieldName, node) as IDataObject;
	}

	protected formatSuccessResponse(data: unknown, itemIndex: number): INodeExecutionData[] {
		const jsonData: IDataObject = (typeof data === 'object' && data !== null)
			? data as IDataObject
			: { value: data as string | number | boolean };
		return [
			{
				json: jsonData,
				pairedItem: { item: itemIndex },
			},
		];
	}

	protected handleOperationError(
		error: Error,
		operation: string,
		itemIndex: number,
		continueOnFail = false,
	): INodeExecutionData[] {
		const errorMessage = error.message || 'Unknown error occurred';
		const sanitizedMessage = sanitizeErrorMessage(errorMessage);

		if (continueOnFail) {
			return [
				{
					json: {
						error: true,
						message: sanitizedMessage,
						operation,
					},
					pairedItem: { item: itemIndex },
				},
			];
		}

		throw error;
	}

	protected buildResourcePath(entitySet: string, entityKey?: string): string {
		return StrategyHelpers.buildResourcePath(entitySet, entityKey);
	}

	protected logOperation(_operation: string, _details: IDataObject): void {
		// no-op, kept for interface compatibility
	}

	protected applyTypeConversion(
		context: IExecuteFunctions,
		itemIndex: number,
		data: unknown,
	): unknown {
		return StrategyHelpers.applyTypeConversion(
			data as IDataObject | IDataObject[],
			context,
			itemIndex
		);
	}
}
